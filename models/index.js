if (!global.hasOwnProperty('db')) {
 
  var mongoose = require('mongoose');

  var dbName = 'vendoferta'
 
  mongoose.connect('mongodb://localhost/' + dbName);
 
  global.db = {
    mongoose: mongoose,

    User      :   require('./User')(mongoose),
    Articulo  :   require('./Articulo')(mongoose)   

  };
}
 
module.exports = global.db;