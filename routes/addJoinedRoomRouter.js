const express = require('express');
const bodyParser = require('body-parser');

const addJoinedRoomRouter = express.Router();

addJoinedRoomRouter.use(bodyParser.json());

addJoinedRoomRouter.route('/:userId')
    .post((req, res, next) => {
        let roomId = '';
        let userId = '';
        roomId = req.body.room_id;
        userId = req.params.userId;
        if ( roomId != null ) {
            req.redis.sismember(userId, roomId, (err, reply) => {
                if (!reply) {
                    req.redis.sadd(userId, roomId, (err, reply) => {
                        if (!reply) {
                            res.send('0');
                        } else {
                            res.send(reply.toString());
                        }
                    });
                } else {
                    res.send(reply.toString());
                }
            });
        } else {
            res.send('Send room id');
        }
    });

module.exports = addJoinedRoomRouter;