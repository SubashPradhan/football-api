const { Router } = require('express')
const Player = require('./model')
const Team = require('../team/model')
const router = new Router
router.get('/player', (request, response, next) => {
  Player.findAll()
    .then(listings => {
      (listings.map(player_name => player_name.dataValues))
      return response.json({ listsOfTeam: listings })
    })
})

router.get('/player/:id', (request, response, next) => {
  Player.findByPk(request.params.id, {include: [team]})
    .then(player => {
      return response.json(player.dataValues)
    .catch(next)  
    }
  )
})

router.post('/player', (request, response, next) => {
  // console.log("request-body", request.body)
  Player.create(request.body)
    .then(player => {
      return response.json(player)
    .catch(next)  
    })

})

router.put('/player/:id', (request, response, next) => {
  Player.findByPk(request.params.id)
    .then(player => {
      player.update(request.body) })
    .then(player => {
      response.json(player)
    }) 
    .catch(next) 
}) 

router.delete('/player/:id', (request, response, next) => {
      Player.destroy({
        where: {id:request.params.id}
      })
    .then(player => {
      response.json(player)
    })
    .catch(next)
})

// .catch(error => next(error))
module.exports = router