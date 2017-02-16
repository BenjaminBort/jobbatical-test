var db              = require('../config/database');
var User            = require('../models/usersModel');

var Listing = db.bookshelf.Model.extend({
    tableName: 'listings',
    hasTimestamps: true,
    user: function () {
      return this.belongsTo(User, 'created_by');
    }
  }
);

module.exports = Listing;
