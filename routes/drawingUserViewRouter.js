const express = require('express');
const bodyParser = require('body-parser');

const drawingUserViewRouter = express.Router();

drawingUserViewRouter.use(bodyParser.json());

drawingUserViewRouter.route('/:room_id')
    .get((req, res, next) => {
        let roomId = req.params.room_id;
        req.redis.hgetall(roomId, (err , roomData) => {
        if (!roomData) {
            res.send(err);
        } else {
            res.send(roomData);
        }
        });
    })
    .put((req, res, next) => {
        let roomId = req.params.room_id;
        let json = req.body.canvas_json;
        if (json != null) {
            if (json != '') {
                req.redis.hmset(roomId, {
                    'canvas_json' : JSON.stringify(json)
                }, (err, reply) => {
                    if (!reply) {
                        res.send(err);
                    } else {
                        res.send(reply);
                    }
                });
            } else {
                req.redis.hmset(roomId, {
                    'canvas_json' : json
                }, (err, reply) => {
                    if (!reply) {
                        res.send(err);
                    } else {
                        res.send(reply);
                    }
                });
            }
        } else {
            res.send('Send json');
        }
    });

module.exports = drawingUserViewRouter;