const {users} = require('../models');
const {server_user_groups} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function jwtSignUser (user){
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {

  async register (req, res) {
      console.log(req.body);
    try {
      const user = await users.create(req.body);
        res.redirect('/');
    } catch (err) {
      res.status(400).send({
        error: err,
        message: 'failed'
      })
    }
  },

  async login (req, res) {
    try {
      const {user_login, user_password} = req.body;

      const loginUser = await users.find({
        where: {
          user_login: user_login
        }
      });
      if (!loginUser){
        return res.status(400).send({
          error: 'login information is incorrect'
        })
      }

      const validPassword = loginUser.comparePassword(user_password);
      if(!validPassword){
        return res.status(403).send({
          error: 'login information is incorrect'
        })
      }

      const userJson = loginUser.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })

    } catch (err) {
      res.status(500).send({
        error: err,
        message: 'failed login'
      })
    }
  },

  async isAuth (req, res){
      try {
        console.log(req.body);
          const {user_id, user_group_id, server_id} = req.body;
          const isAuth = await server_user_groups.findOne({
              where: {
                server_id: server_id,
                [Op.or]: [{user_id: user_id}, {user_group_id: user_group_id}]
              }
          });
          if(isAuth){
            res.send(true);
          } else{
            res.send(false);
          }

      } catch (err) {
          res.status(500).send({
              error: err,
              message: 'failed login'
          })
      }
  }
  //   async isAuth (req, res) {
  //       const {user_id, user_group_id, server_id} = req.body;
  //       try {
  //           const rack = await racks.findAll({
  //               where: {
  //                   "rack_location": location_id,
  //               },
  //           });
  //           res.send(rack);
  //       } catch (err){
  //           res.status(500).send({
  //               error: err,
  //               "message": "Error"
  //           })
  //       }
  //   },
};