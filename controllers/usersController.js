var User        = require('../models/usersModel');

function topActiveUsers(req, res, next) {
  if (req.query['page']) {
    // Retrieve most activ Users -> userModel
    User.mostActivUsers(req.query['page']).then(function (users) {
      users = users.toJSON();
      users = users.filter(function (user) {
        user.count = user.count.length;
        return user;
      });
      res.status(200).json(users);
    })
  }
  else { //bad request
    res.status(400).json({'error': "Bad request (use '/topActiveUsers?page={{page_number}}')"})
  }
}

function getUser(req, res, next) {
  if (req.query['id']) {
    //Retrieve User by ID -> usersModel
    User.byId(req.query['id']).then(function (u) {
      if (u) { //record find
        u = u.toJSON();
        u.companies = [];

        //extract distinct companies from teams
        u.teams.filter(function(team) {
          var pos = u.companies.map(function(e) { return e.id; }).indexOf(team.company_id);
          if (pos == -1) {
            team.companies.isContact = team.contact_user;
            u.companies.push(team.companies);
          }
        })

        // remove now useless information
        delete u.teams;
        res.status(200).json(u);
      }
      else { //record not found
        res.status(400).json({'error': 'Record not found'});
      }
    })
  }
  else { //bad request
    res.status(400).json({'error': "Bad request (use '/users?id={{user_id}}')"})
  }
}

module.exports = {
  topActiveUsers: topActiveUsers,
  getUser: getUser
};
