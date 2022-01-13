const developerController = require('../controllers').developers;
const usersController = require('../controllers').users;
const VerifyToken = require('./verifyToken');
const activitiesController = require('../controllers/activities')
const gamesController = require('../controllers/games')
module.exports = (app) => {


  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Go! Developers API!',
  }));
  /// Developers
  app.post('/api/account/signup', developerController.create);
  app.post('/api/account/login', developerController.login);
  app.get('/api/account/me',VerifyToken, developerController.me);
  app.get('/api/account/users',VerifyToken, developerController.allUsers);


  /// Users
  app.post('/api/users/create',VerifyToken, usersController.create);
  app.post('/api/users/login', usersController.login);
  app.get('/api/users/me',VerifyToken, usersController.me);
  app.get('/api/users/:id',VerifyToken, usersController.getById);

  
  ///Activites
  app.post('/api/activities/createUpdateSteps', VerifyToken, 
  activitiesController.createAndUpdateStepsActivity)


  //// Game Api(s)
  app.get('/api/games/hearts/:id', VerifyToken, gamesController.hearts.calculateHeart)
  app.get('/api/games/stars/:id', VerifyToken, gamesController.stars.calculateStars)
  app.post('/api/games/levels/:id', VerifyToken, gamesController.levels.calculateLevel)
  app.post('/api/games/hpXp/:id', VerifyToken, gamesController.xpHp.calculateHPXP)

};