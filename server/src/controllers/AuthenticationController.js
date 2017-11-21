const {users} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user){
  const ONE_WEEK = 60 * 60 * 24 * 7
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
      const {user_login, user_password} = req.body
      const user = await users.findOne({
        where: {
          user_login: user_login
        }
      })
      if (!user){
        return res.status(400).send({
          error: 'login information is incorrect'
        })
      }

      const validPassword = await user.comparePassword(user_password)

      if(!validPassword){
        return res.status(400).send({
          error: 'login information is incorrect'
        })
      }

      const userJson = user.toJSON()
      // console.log(userJson.user.user_login + ' Logged in')
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
}