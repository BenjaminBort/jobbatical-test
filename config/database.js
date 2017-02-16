var config = {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      database: 'xt6elqxr6t_db',
      user: 'xt6elqxr6t',
      password: 'srqrsqacaa'
  }
}

var knex          = require('knex')(config);
var bookshelf     = require('bookshelf')(knex);

module.exports = {
  knex: knex,
  bookshelf: bookshelf,
};
