var config = {
    client: 'pg',
    connection: {
      host        : 'assignment.codsssqklool.eu-central-1.rds.amazonaws.com',
      port        : '5432',
      database    : 'xt6elqxr6t_db',
      user        : 'xt6elqxr6t',
      password    : 'srqrsqacaa'
  }
}

var knex          = require('knex')(config);
var bookshelf     = require('bookshelf')(knex);

module.exports = {
  knex: knex,
  bookshelf: bookshelf,
};
