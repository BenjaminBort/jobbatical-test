var db            = require('../config/database');
var User          = require('../models/usersModel');
var Company       = require('../models/companiesModel');

var Team = db.bookshelf.Model.extend({
    tableName: 'teams',
    hasTimestamps: false,
    users: function() {
      return this.belongsTo(User, 'user_id');
    },
    companies: function () {
      return this.belongsTo(Company, 'company_id');
    }
  }
);

module.exports = Team;
