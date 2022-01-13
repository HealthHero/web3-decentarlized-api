
const { Developers,Users } = require("../database/models");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
var config = require('../config'); // get our config file


module.exports = {
  async create(req, res) {
    if (req.body.password === req.body.confirmPassword) {
      return Developers
        .create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email.toLowerCase(),
          password: req.body.password,
        })
        .then(developers => res.status(201).send({account: developers }))
        .catch(error => res.status(400).send(error));
    } else {
      res.status(400).send("Please Make Sure Password and Confirm Password is same")
    }
  },

  async login(req, res) {
    return Developers
      .findOne({
        where: {
          email: req.body.email,
        }
      })
      .then(function (developers) {
        bcrypt.compare(req.body.password, developers.password).then(function (result) {
          if (result) {
            var token = jwt.sign({ id: developers.id, type: 'developer' }, config.secret
            );
            developers.token = token;
            res.status(200).send({ account: developers, token });
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
    if (req.role === "developer") {
      await Developers.findOne({
        where: {
          id: req.userId
        }
      }).then(function (developers) {
        res.status(200).send({ account: developers });
      }).catch(error => {
        console.log(error)
        res.status(400).send(error)
      });
    } else {
      res.status(400).send({ message: "Please use /user/me route to get your profile" })
    }
  },

  async allUsers(req, res) {
    if (req.role === "developer") {
      await Users.findAll({
        where: {
          developer_id: req.userId
        }
      }).then(function (developers) {
        res.status(200).send({ users: developers });
      }).catch(error => {
        console.log(error)
        res.status(400).send(error)
      });
    } else {
      res.status(400).send({ message: "Please use /user/me route to get your profile" })
    }
  }

}