var express = require('express');
var router = express.Router();
var db = require('./db');
var fcm = require('./sendFCM');

/* GET home page. */
router.get('/', function(req, res) {
  res.set({'access-control-allow-origin': '*'});
  res.status(200).json(
    {
      "success" : true
    }
  );
});

router.get('/dust_1', db.dust_1);               //localhost:3030/dust_1에 db.dust_1 함수를 매핑
router.get('/dust_25',db.dust_25);
router.get('/dust_10',db.dust_10);
router.post('/dbins', db.dbinsert);
router.get('/fcm', fcm.sendNoti);               //send FCM Message
 
module.exports = router;
