<<<<<<< HEAD
const express = require("express");
const bodyParser = require("body-parser");
=======
const express = require('express');
const bodyParser = require('body-parser');
>>>>>>> 14087888e738a907b3870b86a60075a590fb759c

const drawingRouter = express.Router();

drawingRouter.use(bodyParser.json());

<<<<<<< HEAD
drawingRouter
   .route("/:room_id")
   .get((req, res, next) => {
      let roomId = req.params.room_id;
      req.redis.hgetall(roomId, (err, roomData) => {
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
      let base64 = req.body.base64;
      if (json != null && base64 != null) {
         if (json != "") {
            req.redis.hmset(
               roomId,
               {
                  canvas_json: JSON.stringify(json),
                  base64: base64,
               },
               (err, reply) => {
                  if (!reply) {
                     res.send(err);
                  } else {
                     res.send(reply);
                  }
               }
            );
         } else {
            req.redis.hmset(
               roomId,
               {
                  canvas_json: json,
                  base64: base64,
               },
               (err, reply) => {
                  if (!reply) {
                     res.send(err);
                  } else {
                     res.send(reply);
                  }
               }
            );
         }
      } else {
         if (json == null) {
            res.send("Send JSON Content");
         } else {
            if (json != "") {
               req.redis.hmset(
                  roomId,
                  {
                     canvas_json: JSON.stringify(json),
                  },
                  (err, reply) => {
                     if (!reply) {
                        res.send(err);
                     } else {
                        res.send(reply);
                     }
                  }
               );
            } else {
               req.redis.hmset(
                  roomId,
                  {
                     canvas_json: json,
                  },
                  (err, reply) => {
                     if (!reply) {
                        res.send(err);
                     } else {
                        res.send(reply);
                     }
                  }
               );
            }
         }
      }
   });

module.exports = drawingRouter;
=======
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
                if (json != '') {
                    req.redis.hmset(roomId, {
                        'canvas_json' : JSON.stringify(json)
                    }, (err,reply) => {
                        if (!reply) {
                            res.send(err);
                        } else {
                            res.send(reply);
                        }
                    });
                } else {
                    req.redis.hmset(roomId, {
                        'canvas_json' : json
                    }, (err,reply) => {
                        if (!reply) {
                            res.send(err);
                        } else {
                            res.send(reply);
                        }
                    });
                }
            }
        }
    });

module.exports = drawingRouter;
>>>>>>> 14087888e738a907b3870b86a60075a590fb759c
