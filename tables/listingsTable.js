var db        = require('../config/database');

var listingsTable = db.knex.schema.createTable('listings', function(table) {
    table.increments();
    table.string('name');
    table.string('description');
    table.integer('created_by');
    table.timestamps();
});

module.exports = listingsTable;
