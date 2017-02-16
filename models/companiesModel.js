var db          = require('../config/database');
var Team        = require('../models/teamsModel');

var Company = db.bookshelf.Model.extend({
    tableName: 'companies',
    hasTimestamps: true,
    teams: function () {
      return this.belongsTo(Team, 'id');
    }
  }
);

module.exports = Company;
