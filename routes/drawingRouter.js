const express = require('express');
const bodyParser = require('body-parser');

const drawingRouter = express.Router();

drawingRouter.use(bodyParser.json());

drawingRouter.route('/:room_id')
    .put((req,res,next) => {
        let roomId = req.params.room_id;
        let base64 = req.body.base64;
        let is_published = req.body.is_published;
        if (base64 != null && is_published != null) {
            req.redis.hmset(roomId, {
                'base64' : base64,
                'is_published' : is_published
            }, (err,reply) => {
                if (!reply) {
                    res.send(err);
                } else {
                    res.send(reply);
                }
            });
        } else {
            if ( base64 == null )
                res.send('Send image string');
            else 
                res.send('Send is_published field');
        }
    });
module.exports = drawingRouter;