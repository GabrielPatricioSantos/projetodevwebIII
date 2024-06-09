const express         = require('express')
const multer          = require('multer')
const multerConfig    = require('./Middlewares/multer')
const plateController = require('./controllers/prato')
const pedidoController = require('./controllers/pedido')
//const imageController = require('./controllers/')

const routes = express.Router()

routes.get('/pratos',  plateController.getAll)
routes.get('/pratos/:id', plateController.get)
routes.get('/add-pratos', plateController.create)
routes.post('/add-pratos', [multer(multerConfig).single('image')], plateController.add)
routes.post('/pratos/:id', [multer(multerConfig).single('image')], plateController.update)
routes.delete('/pratos/:id', plateController.remove)
routes.get('/add-pedido', pedidoController.create )

module.exports = routes