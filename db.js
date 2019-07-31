const Sequelize = require('sequelize')
const databaseUrl = 'postgres://postgres:secret@localhost:5432/football-api'
const db = new Sequelize(databaseUrl)

db.sync({force: true})
  .then(() => console.log("Database has been updated!"))
  .catch((error) => {
    console.log(error)
  })  

module.exports = db  