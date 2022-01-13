const developers = require('./developers');
const users = require('./users');
const activities = require('./activities');
const games = require('./games');
module.exports = {
    developers,
    users,
    activities,
    ...games,
};