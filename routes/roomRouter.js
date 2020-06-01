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