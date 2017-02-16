var db          = require('../config/database');

var companiesTable = db.knex.schema.createTable('companies', function(table) {
    table.increments();
    table.string('name');
    table.timestamps();
});

module.exports = companiesTable;
