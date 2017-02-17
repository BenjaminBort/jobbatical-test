var moment          = require('moment');
var db              = require('../config/database');
var Team            = require('../models/teamsModel');
var Listing         = require('../models/listingsModel');
var Application     = require('../models/applicationsModel');

db.bookshelf.plugin('pagination')

// Set user model and relation between tables
var User = db.bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    /*
    ** Get user's teams
    */
    teams: function() {
      return this.hasMany(Team, 'user_id');
    },
    /*
    ** Get user's listings
    */
    createdListings: function() {
      return this.hasMany(Listing, 'created_by');
    },
    /*
    ** Get user's application
    */
    applications: function () {
      return this.hasMany(Application, 'user_id');
    },
    /*
    ** Get user's applications in the past week's time
    */
    count: function () {
      return this.applications().query(function (qb) {
        qb.where('created_at', '<=', moment().subtract(1, 'week'));
      });
    },
    /*
    ** Get 3 latest user's listings order by date
    */
    listings_complete: function () {
      return this.hasMany(Listing, 'created_by').query(function (qb) {
        qb.orderBy('created_at', 'DESC');
        qb.limit(3);
      });
    }
  },
  { // Custom method
    /*
    ** Get most activ users with pagination
    */
    mostActivUsers: function (page) {
      var data = this.forge().orderBy('name').fetchPage({
        pageSize: 2, // set results number by page
        page: page,
        withRelated: ['count', 'listings_complete'] // call relation table
      });
      return data;
    },
    /*
    ** Get single user
    */
    byId: function(id) {
      return this.forge().query({where:{ id: id }}).fetch({withRelated: ['teams', 'teams.companies', 'createdListings', 'applications', 'applications.listing']});
    }
  }
);

module.exports = User;
