var db          = require('../config/database');

var usersTable = db.knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('name');
    table.timestamps();
});

module.exports = usersTable;
