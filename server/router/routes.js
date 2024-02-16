const router = require('express').Router()
const userSingup = require('../controll/userSingup')
const userLogin = require('../controll/userLogin')
const adminAdd = require('../controll/adminAdd')
const adminLogin = require('../controll/adminLogin')
const addProduct = require('../controll/ProductsApi/addProduct')
const updateProduct = require('../controll/updateProduct')
const productList = require('../controll/ProductsApi/productList')
const singleProduc = require('../controll/ProductsApi/singleProduct')
const searchProductCategory = require('../controll/ProductsApi/searchProductCategory')
// middlewares
const auth = require('../middleware/auth')
const adminAuth = require('../middleware/adminAuth')
const loggedIn = require('../controll/loggedIn')
const adminLoggedIn = require('../controll/adminLogedIn')

// get methods
router.route('/').get((req,res)=>{
    res.send('yes yes yes')
})
router.route('/products').get(auth,productList)
router.route('/loggedin').get(loggedIn)
router.route('/adminloggedin').get(adminLoggedIn)
router.route('/singleproduct:id').get(singleProduc)
router.route('/searchproductcategory:id').get(searchProductCategory)
///post methods
router.route('/signup').post(userSingup)
router.route('/login').post(userLogin)
router.route('/addadmin').post(adminAdd)
router.route('/adminlogin').post(adminLogin)
router.route('/addproduct').post(adminAuth,addProduct)
router.route('/updateproduct').put(adminAuth,updateProduct)


module.exports = router