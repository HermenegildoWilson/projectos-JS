const { passport } = require('./auth/passport');
const { user } = require('./validator/user');

const validator = { user }


module.exports = { passport, validator };