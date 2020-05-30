const express = require('express');
const bodyParser = require('body-parser');

const drawingRouter = express.Router();

drawingRouter.use(bodyParser.json());

drawingRouter.route('/:room_id')
    .put((req, res, next) => {
        let roomId = req.params.room_id;
        let base64 = req.body.base64;
        let is_published = req.body.is_published;
        if (base64 != undefined && is_published != undefined) {
            req.redis.hmset(roomId, {
                'base64': base64,
                'is_published': is_published
            }, (err, reply) => {
                (!reply) ? (res.send(err)) : (res.send(reply));
            });
        } else {
            (base64 === undefined ? (is_published === undefined ? res.send('Send proper details') : res.send('Send image string')) : res.send('Send is_published field'));
        }
    });
module.exports = drawingRouter;