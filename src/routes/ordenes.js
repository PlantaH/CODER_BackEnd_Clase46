const Router = require('koa-router')
const {
    getOrdenes,
    createOrder,  
} = require("../controllers/productosController");

const router = new Router({
  prefix: '/ordenes'
})


//GET TODAS LAS ORDENES
router.get("/", middlewares.isAdmin, getOrdenes);

//POST GENERA NUEVA ORDEN SEGUN EL CARRITO
router.post("/:idCarrito", middlewares.isRegister, createOrder);

//EXPORT MODULO ROUTER
module.exports = router;
