const Pedido = require('../models/Pedido')

const create = async (req, res) => {
    let pageTitle = 'Cadastrar pedido'
    let jsScripts = []
    let cssStyles = []
    // let pedidos = await Pedido.findAll()

    return res.render('pedido', { pageTitle, cssStyles, jsScripts })
}

module.exports = {
    create
    // add,
    // get,
    // getAll,
    // update,
    // remove
}