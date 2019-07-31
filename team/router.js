const { Router } = require('express')
const Team = require('./model')
const router = new Router
router.get('/team', (request, response, next) => {
  Team.findAll()
    .then(listings => {
      (listings.map(team_name => team_name.dataValues))
      return response.json({ listsOfTeam: listings })
    })
})

router.get('/team/:id', (request, response, next) => {
  Team.findByPk(request.params.id)
    .then(team => {
      return response.json(team.dataValues)
    .catch(next)  
    }
  )
})

router.post('/team', (request, response, next) => {
  // console.log("request-body", request.body)
  Team.create(request.body)
    .then(team => {
      return response.json(team)
    .catch(next)  
    })

})

router.put('/team/:id', (request, response, next) => {
  Team.findByPk(request.params.id)
    .then(team => {
      team.update(request.body) })
    .then(team => {
      response.json(team)
    }) 
    .catch(next) 
}) 

router.delete('/team/:id', (request, response, next) => {
      Team.destroy({
        where: {id:request.params.id}
      })
    .then(team => {
      response.json(team)
    })
    .catch(next)
})

// .catch(error => next(error))
module.exports = router