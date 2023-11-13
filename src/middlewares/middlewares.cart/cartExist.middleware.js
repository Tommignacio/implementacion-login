import { cartApi } from '../../controllers/CartController.js'

export const cartExist = async function (req, res, next) {
    const allCarts = await cartApi.getAll()
    for (const i of allCarts) {
        if (i.id === req.params.cid) {
            return next() //si no hay error, continua
        }
    }
    next('error') //le paso el error si no encontro el carrito
}
