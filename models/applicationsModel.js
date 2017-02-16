var db              = require('../config/database');
var User            = require('../models/usersModel');
var Listing         = require('../models/listingsModel');

var Application = db.bookshelf.Model.extend({
    tableName: 'applications',
    hasTimestamps: true,
    users: function() {
      return this.belongsTo(User, 'user_id');
    },
    listing: function() {
      return this.belongsTo(Listing, 'listing_id');
    },

  }
);

module.exports = Application;
