var express = require('express');
var router = express.Router();
var PgUtil = require('../PgUtil');



/*getbyid */
router.get('/:id?', function (req, res, next) {
  var queryString = ''
  if (req.params.id) {
    queryString = "select * from course where id= '" + req.params.id + "'"
  } else {
    queryString = "select * from course "
  }
  
  console.log(queryString);
  PgUtil.executeQuery(queryString, function (err, data) {
    if (err) {
      res.json(err);
    } else {
      res.json(data)
    }
  })


});

/*update*/
router.put('/:id', function (req, res, next) {
  console.log(req.body);
   var queryString = "update course set name='" + req.body.Name + "' where id= '" + req.params.id + "'"
  PgUtil.executeNonQuery(queryString, function (err, data) {
    if (err) {
      res.json(err);
    } else {
        res.json({
          "message": "row updated successfully"
        })
    }
  })


});

//insert
router.post('/', function (req, res, next) {
  var queryString = "insert into course(id,name) values('" + req.body.Id + "','" + req.body.Name + "')"
  console.log(queryString);

  PgUtil.executeNonQuery(queryString, function (err, data) {
    if (err) {
      res.json(err);
    } else {
        res.json({
          "message": "row inserted successfully"
        })      
    }
  })
});

/*delete */
router.delete('/:id', function (req, res, next) {
  var queryString = "delete from course where id= '" + req.params.id + "'"
  console.log(queryString);
  PgUtil.executeNonQuery(queryString, function (err, data) {
    if (err) {
      res.json(err);
    } else {
        res.json({
          "message": "row deleted successfully"
        })
    }
  })
});

module.exports = router;
