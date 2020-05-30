const express = require('express');
const bodyParser = require('body-parser');
const async = require('async');

const boardRouter = express.Router();

boardRouter.use(bodyParser.json());

boardRouter.route('/:userId')
    .get((req, res, next) => {
        let userId = req.params.userId;
        let rooms = [];
        let roomsinfo = {};
        req.redis.smembers(userId, function(err, roomsOfUser){
            if (!roomsOfUser) {
                res.send(err);
            } else {
                rooms = roomsOfUser;
                async.forEach(rooms, function(room, callback) { 
                req.redis.hgetall(room, (err,reply)=>{
                    if (err) {
                        callback();
                    } else {
                        roomsinfo[room] = reply.room_title;
                        callback();
                    }
                });
                }, function(err) {
                    if (err) return next(err);
                        res.send(roomsinfo);
                });
            };
        }); 
    })
    .post((req, res, next) => {
        let userId = req.params.userId;
        let roomId = req.body.room_id;
        let roomTitle = req.body.room_title;
        if (roomId != null && roomTitle != null) {
        req.redis.sadd('rooms', roomId, (err, reply) => {
            if (!reply) {
                res.send(err);
            } else {
                req.redis.sadd(userId, roomId, (err, reply) => {
                    if (!reply) {
                        res.send(err);
                    } else {
                        req.redis.hmset(roomId, {
                        'room_title' : roomTitle,
                        'admin_id' : userId,
                        'canvas_json': '',
                        'base64': '',
                        'is_published' : 'false'
                    }, (err, reply) => {
                        if (!reply) {
                            res.send(err);
                        } else {
                            res.send(reply);
                        }
                    });
                    }
                });
            }
        });
        } else {
            (roomId == null ? (roomTitle == null ? res.send('Send proper details') : res.send('Send room ID')) : res.send('Send room title'));
        }
    });

module.exports = boardRouter;