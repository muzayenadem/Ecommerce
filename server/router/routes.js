const router = require('express').Router()
const multer = require('multer')
const userSingup = require('../controll/userSingup')
const userLogin = require('../controll/userLogin')
const adminAdd = require('../controll/adminAdd')
const adminLogin = require('../controll/adminLogin')
const allUsers = require('../controll/allUsers')
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
const updateProfile = require('../controll/updateProfile')
const adminProfile = require('../controll/adminProfile')
const updateAdminProfile = require('../controll/updateAdminProfile')
const singleUserData = require('../controll/singleUserData')
const addProductToCart = require('../controll/ProductsApi/addProductToCart')
const searchUserForMessage = require('../controll/Message/searchUserForMessage')
const userMessageData = require('../controll/Message/userMessageData')
const sendMessage = require('../controll/Message/sendMessage')
const userLogout = require('../controll/userLogout')
// to store the products image
const productImageStorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'Files/ProductsImage');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const uploadProductImage = multer({storage:productImageStorage});

// to store the Users image
// const userImageStorage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'Files/UsersImage');
//     },
//     filename:function(req,file,cb){
//         cb(null,file.originalname)
//     }
// })
// const uploadUserImage = multer({storage:userImageStorage});


// to store the Admin image
// const adminImageStorage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'Files/UsersImage');
//     },
//     filename:function(req,file,cb){
//         cb(null,file.originalname)
//     }
// })
// const uploadAdminImage = multer({storage:userImageStorage});

// get methods
router.route('/let').get((req,res)=>{
    res.send('yes yes yes')
})
router.route('/adminprofile').get(adminAuth,adminProfile)
router.route('/allusers').get(adminAuth,allUsers)
router.route('/profiledata').get(auth,profileData)
router.route('/products').get(productList)
router.route('/loggedin').get(loggedIn)
router.route('/adminloggedin').get(adminLoggedIn)
router.route('/singleproduct:id').get(singleProduc)
router.route('/searchproductcategory:id').get(searchProductCategory)
router.route('/searchuserformessage:id').get(searchUserForMessage)
router.route('/singleuserdata:id').get(adminAuth,singleUserData)
router.route('/usermessagedata:id').get(auth,userMessageData)
router.route('/logout').get(userLogout)
router.route('/logoutAdmin').get((req,res)=>{
    res.cookie("adminLoginToken","",{
        httpOnly:true,
        expires:new Date(0)
    }).send();
    console.log('logged out')
})

///post methods
router.route('/signup').post(userSingup)
router.route('/login').post(userLogin)
router.route('/addadmin').post(adminAdd)
router.route('/adminlogin').post(adminLogin)
router.route('/addproduct').post(uploadProductImage.array('images',5),adminAuth,addProduct)
router.route('/updateproduct').post(uploadProductImage.single('image'),adminAuth,updateProduct)
router.route('/updateprofile').post(auth ,updateProfile)
router.route('/updateadminprofile').post(adminAuth,updateAdminProfile)
router.route('/sendmessage').post(auth,sendMessage)

// delete method

router.route('/delete:id').delete(deleteProduct)

// update or put method
 
router.route('/addcart').put(auth,addProductToCart)
module.exports = router