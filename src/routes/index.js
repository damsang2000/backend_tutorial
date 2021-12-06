import productsRouter from '../routes/product.js'
import siteRouter from '../routes/site.js'
function route(app){
    app.use('/product',productsRouter)
    app.use('/',siteRouter)
}

export default route