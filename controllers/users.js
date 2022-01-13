
const { Users } = require("../database/models");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
var config = require('../config'); // get our config file


module.exports = {
  async create(req, res) {
    ///need admin token
    if (req.role === "developer") {
      const salt = bcrypt.genSaltSync();
      if (req.body.password === req.body.confirmPassword) {
        return Users
          .create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email.toLowerCase(),
            encrypted_password: bcrypt.hashSync(req.body.password, salt),
            developer_id: req.userId,
            created_at: new Date(),
            updated_at: new Date(),
          })
          .then(users => res.status(201).send(users))
          .catch(error => res.status(400).send(error));
      } else {
        res.status(400).send("Please Make Sure Password and Confirm Password is same")
      }
    } else {
      res.status(200).send({ messages: "Only Admin can access this endpoint." });

    }
  },

  async login(req, res) {
    /// no token
    return Users
      .findOne({
        where: {
          email: req.body.email,
        }
      })
      .then(function (users) {
        bcrypt.compare(req.body.password, users.encrypted_password).then(function (result) {
          if (result) {
            var token = jwt.sign({ id: users.id, type: 'user' }, config.secret, {
              expiresIn: 186400
            });
            users.token = token;
            res.status(200).send({ users, token });
          } else {
            res.status(400).send("Email and password do not match with our database")
          }
        });
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      });
  },

  async me(req, res) {
    /// need user token
    if (req.role === "user") {
      await Users.findOne({
        where: {
          id: req.userId
        }
      }).then(function (users) {
        res.status(200).send({ users });
      }).catch(error => {
        console.log(error)
        res.status(400).send(error)
      });
    } else {
      res.status(200).send({ messages: "Only User can access this endpoint." });
    }

  },
  async getById(req, res) {
    // need admin token
    if (req.role === "developer") {
      await Users.findOne({
        where: {
          id: req.params.id
        }
      }).then(function (users) {
        res.status(200).send({ users });
      }).catch(error => {
        console.log(error)
        res.status(400).send(error)
      });
    } else {
      res.status(200).send({ messages: "Only Admin can access this endpoint." });
    }
  }
}