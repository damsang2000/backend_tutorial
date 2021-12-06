 class ProductsController{

    // [GET] /product
    index(req,res){
        res.render('product')
    }
    // [GET] /product/:slug
    show(req,res){
        res.send('PRODUCT CLOTHES')
    }
}
export default new ProductsController
