var db        = require('../config/database');

var applicationsTable = db.knex.schema.createTable('applications', function(table) {
    table.increments();
    table.string('cover_letter');
    table.integer('listing_id');
    table.integer('user_id');
    table.timestamps();
});

module.exports = applicationsTable;
