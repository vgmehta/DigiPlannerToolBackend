const express = require('express');
const bodyParser = require('body-parser');

const roomExistenceRouter = express.Router();

roomExistenceRouter.use(bodyParser.json());

roomExistenceRouter.route('/:roomId')
    .get((req, res, next) => {
        let roomId = '';
        roomId = req.params.roomId;
        req.redis.sismember('rooms', roomId, (err, reply) => {
            if (!reply) {
                res.send(false);
            } else {
                req.redis.hget(roomId, 'is_published', (err, reply) => {
                    if (!reply) {
                        res.send(err);
                    } else {
                        (reply === 'true') ? (res.send(true)) : (res.send('You cannot access this room yet'));
                    }
                });
            }
        });
    });

module.exports = roomExistenceRouter;