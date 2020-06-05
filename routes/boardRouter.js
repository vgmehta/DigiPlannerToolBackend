const express = require('express');
const bodyParser = require('body-parser');
const async = require('async');

const boardRouter = express.Router();

boardRouter.use(bodyParser.json({
    limit: '50mb'
}));

boardRouter.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

boardRouter.route('/:userId/:roomId')
    /**
     * @swagger
     * /board/{userId}/{roomId}:
     *  get:
     *    description: Used to get board data
     *    responses:
     *      '200':
     *        description: 
     *              A JSON object with two fields-success(true or false) 
     *              and messages(room data not available)
     *              / data (room information)
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
    .get((req, res, next) => {
        var roomId = req.params.roomId;
        var userId = req.params.userId;
        req.redis.hgetall(roomId, (err, roomData) => {
            if (!roomData) {
                res.send({
                    success: false,
                    messages: ["Room data not available", err]
                });
            } else {
                var data = new Object();
                data.email = userId;
                data.room_id = roomId;
                data.room_data = roomData;
                res.send({
                    success: true,
                    data: data
                });
            }
        });
    })
    /**
     * @swagger
     * /board/{userId}/{roomId}:
     *  put:
     *    description: Used to get board data
     *    responses:
     *      '200':
     *        description: 
     *              A JSON object with two fields-success(true or false) 
     *              and messages(whether room data is updated or not)
     *    consumes:
     *      - application/json
     *    parameters:
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
     *      - name: board
     *        description: Board information to be updated
     *        in: body
     *        schema:
     *          type: object
     *          properties: 
     *               canvas_json:
     *                   type: string
     *               base64:
     *                   type: string
     *               is_published:
     *                   type: string
     */
    .put((req, res, next) => {
        let userId = req.params.userId;
        let roomId = req.params.roomId;
        let json = req.body.canvas_json;
        let base64 = req.body.base64;
        let is_published = req.body.is_published;
        req.redis.hget('users', userId, (err, reply) => {
            if (!reply) {
                res.send({
                    success: false,
                    messages: ["Not a user"]
                });
            } else {
                if ((reply === '1' && base64 === undefined) || reply === '0') {
                    if (json != undefined) {
                        if (json != '') {
                            req.redis.hmset(roomId, {
                                'canvas_json': JSON.stringify(json)
                            }, (err, reply) => {
                                if (!reply) {
                                    res.send({
                                        success: false,
                                        messages: ["Could not update the json"]
                                    })
                                } else {
                                    res.send({
                                        success: true,
                                        messages: ["JSON field updated successfully"]
                                    });
                                }
                            });
                        } else {
                            req.redis.hmset(roomId, {
                                'canvas_json': json
                            }, (err, reply) => {
                                if (!reply) {
                                    res.send({
                                        success: false,
                                        messages: ["Could not update the json"]
                                    })
                                } else {
                                    res.send({
                                        success: true,
                                        messages: ["JSON field updated successfully"]
                                    });
                                }
                            });
                        }
                    } else {
                        res.send({
                            success: false,
                            messages: ["Send details"]
                        });
                    }
                } else {
                    if (base64 != undefined && is_published != undefined) {
                        req.redis.hmset(roomId, {
                            'base64': base64,
                            'is_published': is_published
                        }, (err, reply) => {
                            if (!reply) {
                                res.send({
                                    success: false,
                                    messages: ["Could not update the board", err]
                                })
                            } else {
                                res.send({
                                    success: true,
                                    messages: ["Board updated successfully"]
                                });
                            }
                        });
                    } else {
                        if (base64 === undefined && is_published === undefined) {
                            res.send({
                                success: false,
                                messages: ["Send proper details"]
                            });
                        } else if (base64 === undefined) {
                            res.send({
                                success: false,
                                messages: ["Send base64 string"]
                            });
                        } else {
                            res.send({
                                success: false,
                                messages: ["Send is_published field"]
                            });
                        }
                    }
                }
            }
        })
    })
    /**
     * @swagger
     * /board/{userId}/{roomId}:
     *  post:
     *    description: Used to create a board
     *    responses:
     *      '200':
     *        description: 
     *              A JSON object with two fields-success(true or false) 
     *              and messages(room created or not)
     *    consumes:
     *      - application/json
     *    parameters:
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
     *      - name: board
     *        description: Board information to be added
     *        in: body
     *        schema:
     *          type: object
     *          properties: 
     *               room_title:
     *                   type: string
     */
    .post((req, res, next) => {
        let userId = req.params.userId;
        let roomId = req.params.roomId;
        let roomTitle = req.body.room_title;
        req.redis.hget('users', userId, (err, reply) => {
            if (!reply) {
                res.send({
                    success: false,
                    messages: ["Not a user"]
                });
            } else {
                if (reply === '1') {
                    if (roomTitle != undefined) {
                        req.redis.sadd('rooms', roomId, (err, reply) => {
                            if (!reply) {
                                res.send({
                                    success: false,
                                    messages: ["Could not add room", err]
                                });
                            } else {
                                req.redis.sadd(userId, roomId, (err, reply) => {
                                    if (!reply) {
                                        res.send({
                                            success: false,
                                            messages: ["Could not add room to user list", err]
                                        });
                                    } else {
                                        req.redis.hmset(roomId, {
                                            'room_title': roomTitle,
                                            'admin_id': userId,
                                            'canvas_json': '',
                                            'base64': '',
                                            'is_published': 'false'
                                        }, (err, reply) => {
                                            if (!reply) {
                                                res.send({
                                                    success: false,
                                                    messages: ["Could not create room", err]
                                                });
                                            } else {
                                                res.send({
                                                    success: true,
                                                    messages: ["Room created"]
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    } else {
                        res.send({
                            success: false,
                            messages: ["Room Title not sent"]
                        });
                    }
                } else {
                    res.send({
                        success: false,
                        messages: ["You are not authorized for this action"]
                    });
                }
            }
        });
    });
module.exports = boardRouter;
