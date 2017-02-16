var express       = require('express');
var router        = express.Router();
var users         = require('../controllers/usersController');

router.get('/topActiveUsers', users.topActiveUsers);
router.get('/users', users.getUser);

module.exports = router;
