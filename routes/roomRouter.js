const express = require('express');
const bodyParser = require('body-parser');

const roomRouter = express.Router();

roomRouter.use(bodyParser.json({
    limit: '50mb'
}));

roomRouter.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

/**
 * @swagger
 * /room/{userId}/{roomId}:
 *  get:
 *    description: Used to check room code validity
 *    responses:
 *      '200':
 *        description: 
 *              A JSON object with two fields-success(true or false) 
 *              and messages( existence and availability of room code )
 *  parameters:
 *      - name: userId
 *        in: path
 *        description: Email of the user
 *        required: true
 *        schema:
 *          type: string
 *          format: email
 *      - name: roomId
 *        in: path
 *        description: Room code
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 */
roomRouter.route('/:userId/:roomId')
    .get((req, res, next) => {
        let roomId = req.params.roomId;
        req.redis.sismember('rooms', roomId, (err, reply) => {
            if (!reply) {
                res.send({
                    success: false,
                    messages: ["Room Id doesn't exist"]
                });
            } else {
                req.redis.hget(roomId, 'is_published', (err, reply) => {
                    if (!reply) {
                        res.send({
                            success: false,
                            messages: ["Cannot get room data", err]
                        });
                    } else {
                        if (reply === 'true') {
                            res.send({
                                success: true,
                                messages: ["Room Id exists and is accessible"]
                            });
                        } else {
                            res.send({
                                success: true,
                                messages: ["You cannot access this room yet"]
                            });
                        }
                    }
                });
            }
        });
    })
    /**
     * @swagger
     * /room/{userId}/{roomId}:
     *  post:
     *    description: Used to add room code to user list for view existing board feature
     *    responses:
     *      '201':
     *        description: 
     *              A JSON object with two fields-success(true or false) 
     *              and messages( post request successful or not )
     *  parameters:
     *      - name: userId
     *        in: path
     *        description: Email of the user
     *        required: true
     *        schema:
     *          type: string
     *          format: email
     *      - name: roomId
     *        in: path
     *        description: Room code
     *        required: true
     *        schema:
     *          type: string
     *          format: string
     */
    .post((req, res, next) => {
        let roomId = req.params.roomId;
        let userId = req.params.userId;
        req.redis.sismember(userId, roomId, (err, reply) => {
            if (!reply) {
                req.redis.sadd(userId, roomId, (err, reply) => {
                    if (!reply) {
                        res.send({
                            success: false,
                            messages: ["Cannot add to user list", err]
                        });
                    } else {
                        res.send({
                            success: true,
                            messages: ["User list updated with room id", reply]
                        });
                    }
                });
            } else {
                res.send({
                    success: true,
                    messages: ["User list updated with room id", reply]
                });
            }
        });
    });

module.exports = roomRouter;