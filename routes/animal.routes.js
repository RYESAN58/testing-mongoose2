const animalController = require('../controllers/animal.controller')
const AnimalController = require('../controllers/animal.controller')

module.exports = (app) =>{
    app.post('/api/animals', AnimalController.createNewAnimal )

    app.get('/api/animals', AnimalController.findAllAnimals)

    app.get('/api/animals/:id', AnimalController.findOneAnimal)

    app.delete('/api/animals/:id', AnimalController.deleteOneAnimal)

    app.put('/api/animals/:id' , animalController.updateAnimal)
}