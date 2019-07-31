const Sequelize =require('sequelize')
const db = require('../db')
const Team = require('../team/model')
const Player = db.define('players', {name: {
  type: Sequelize.STRING,
  field: 'team_name'
},
  number:{
    type: Sequelize.INTEGER,
    field: 'numberOfPlayer'
  }
})
Player.belongsTo(Team)

module.exports = Player