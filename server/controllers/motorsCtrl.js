var app = require('../index');
var db = app.get('db');

module.exports = {

  getAll: function(req,res,next){
    //console.log(db);
    db.read_items(function(err, items) {
    res.json(items);
    });
  },
  getOne: function(req,res,next){
    //console.log(req.query.id);
      db.read_item([req.query.id],function(err, item) {
      res.status(200).json(item);
    });
  },
  getCat: function(req,res,next){
    //console.log(db);
    db.read_category(function(err, cat) {
    res.json(cat);
    });
  },
  getType: function(req,res,next){
    //console.log(db);
    db.read_type(function(err, type) {
    res.json(type);
    });
  },
};
