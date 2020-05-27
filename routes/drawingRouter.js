const express = require('express');
const bodyParser = require('body-parser');

const drawingRouter = express.Router();

drawingRouter.use(bodyParser.json());

drawingRouter.route('/:room_id')
    .get((req,res,next) => {
        let roomId = req.params.room_id;
        req.redis.hgetall(roomId, (err,roomData) => {
        if (!roomData) {
            res.send(err);
        } else {
            res.send(roomData);
        }
        });
    })
    .put((req,res,next) => {
        let roomId = req.params.room_id;
        let json = req.body.canvas_json;
        let base64 = req.body.base64;
        if (json != null && base64 !=null) {
            if (json != '') {
                req.redis.hmset(roomId, {
                    'canvas_json' : JSON.stringify(json),
                    'base64' : base64
                }, (err,reply) => {
                    if (!reply) {
                        res.send(err);
                    } else {
                        res.send(reply);
                    }
                });
            } else {
                req.redis.hmset(roomId, {
                    'canvas_json' : json,
                    'base64' : base64
                }, (err,reply) => {
                    if (!reply) {
                        res.send(err);
                    } else {
                        res.send(reply);
                    }
                });
            }
        } else {
            if (json == null) {
                res.send("Send JSON Content");
            } else {
                res.send("Send base64");
            }
        }
    });

module.exports = drawingRouter;