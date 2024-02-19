const router = require('express').Router()
const multer = require('multer')
const userSingup = require('../controll/userSingup')
const userLogin = require('../controll/userLogin')
const adminAdd = require('../controll/adminAdd')
const adminLogin = require('../controll/adminLogin')
const addProduct = require('../controll/ProductsApi/addProduct')
const updateProduct = require('../controll/ProductsApi/updateProduct')
const productList = require('../controll/ProductsApi/productList')
const singleProduc = require('../controll/ProductsApi/singleProduct')
const searchProductCategory = require('../controll/ProductsApi/searchProductCategory')
// middlewares
const auth = require('../middleware/auth')
const adminAuth = require('../middleware/adminAuth')
const loggedIn = require('../controll/loggedIn')
const adminLoggedIn = require('../controll/adminLogedIn')
const deleteProduct = require('../controll/ProductsApi/deleteProduct')
const profileData = require('../controll/profileData')
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'Files/ProductsImage');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage:storage});




// get methods
router.route('/').get((req,res)=>{
    res.send('yes yes yes')
})
router.route('/profiledata').get(auth,profileData)
router.route('/products').get(productList)
router.route('/loggedin').get(loggedIn)
router.route('/adminloggedin').get(adminLoggedIn)
router.route('/singleproduct:id').get(singleProduc)
router.route('/searchproductcategory:id').get(searchProductCategory)
///post methods
router.route('/signup').post(userSingup)
router.route('/login').post(userLogin)
router.route('/addadmin').post(adminAdd)
router.route('/adminlogin').post(adminLogin)
router.route('/addproduct').post(upload.single('image'),adminAuth,addProduct)
router.route('/updateproduct').post(upload.single('image'),adminAuth,updateProduct)

// delete method

router.route('/delete:id').delete(deleteProduct)


module.exports = router