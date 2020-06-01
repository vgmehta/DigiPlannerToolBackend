const express = require('express');
const bodyParser = require('body-parser');
const async = require('async');

const userRouter = express.Router();

userRouter.use(bodyParser.json({
    limit: '50mb'
}));
userRouter.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

userRouter.route('/:userId')
    .get((req, res, next) => {
        let userId = req.params.userId;
        req.redis.hget('users', userId, function (err, reply) {
            if (!reply) {
                res.send({
                    success: false,
                    messages: ["User doesn't exist"]
                });
            } else {
                var rooms = [];
                var data = new Object();
                data.email = userId;
                (reply === '1') ? data.roles = [1, 2]: data.roles = [2];
                data.boards = [];
                req.redis.smembers(userId, function (err, roomsOfUser) {
                    if (!roomsOfUser) {
                        res.send({
                            success: false,
                            messages: ["User not part of any room"]
                        });
                    } else {
                        rooms = roomsOfUser;
                        async.forEach(rooms, function (room, callback) {
                            req.redis.hgetall(room, (err, reply) => {
                                if (err) {
                                    callback();
                                } else {
                                    data.boards.push({
                                        room_id: room,
                                        room_title: reply.room_title
                                    });
                                    callback();
                                }
                            });
                        }, function (err) {
                            if (err) return next(err);
                            res.send({
                                success: true,
                                data: data
                            })
                        });
                    };
                });
            }
        });
    });

module.exports = userRouter;