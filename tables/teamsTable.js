var db        = require('../config/database');

var teamsTable = db.knex.schema.createTable('teams', function(table) {
    table.increments();
    table.integer('company_id');
    table.integer('user_id');
    table.integer('contact_user');
});

module.exports = teamsTable;
