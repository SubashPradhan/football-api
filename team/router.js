const {Router} = require('express')
const Team = require('./model')
const router = new Router
router.get('/team', (request, response, next) => {
  Team.findAll()
    .then(listings => {      
      (listings.map(team_name => team_name.dataValues))
      return response.json({listsOfTeam: listings})
    })
})

router.post('/team', (request, response, next) =>{
  console.log("request-body", request.body)
  Team.create(request.body)
    .then(team => {
      return response.send(team)
    })
    .catch(next)
} )
module.exports = router