

const express=require('express')
const {Addbook, bookdetails, deletedata, updatebook, findbook} = require('./Projectcontroller/bookcontroller')
const {addClient,displayclient, updateclient, deleteclient, singledate} = require('./Projectcontroller/Cliendcontroller')
const {Addcustemer, displaycustemer, Deletecustemer, singlecustemer, updatecustemer} = require('./Projectcontroller/Custemercontroller')
const {Usersignup, Loginuser} = require('./Projectcontroller/Usercontroler')
const {Teammember, updatemember, memberdisplay, singlemember, deletemember} = require('./Projectcontroller/Teammembercontroller')
const { Addorder, displayorder, singleorder, Deleteorder, updateorder } = require('./Projectcontroller/Ordercontroller')

const{addtocart, cart, removeitemfromcart}=require('./Projectcontroller/Addtocartcontroller')

const router=express.Router()
//user signup
router.route('/signup').post(Usersignup)
router.route('/login').post(Loginuser)
//Book
router.route('/addbook').post(Addbook)
router.route('/disbook').get(bookdetails)
router.route('/remove/:id').delete(deletedata)
router.route('/update/:id').put(updatebook)
router.route('/find/:id').get(findbook)
//Client
router.route('/addclient').post(addClient)
router.route('/disclient').get(displayclient)
router.route('/updateclient/:id').put(updateclient)
router.route('/deleteclient/:id').delete(deleteclient)
router.route('/findclient/:id').get(singledate)
//Custemer
router.route('/addcustemer').post(Addcustemer)
router.route('/custemer').get(displaycustemer)
router.route('/delcustemer/:id').delete(Deletecustemer)
router.route('/findsingle/:id').get(singlecustemer)
router.route('/custemerupdate/:id').put(updatecustemer)
//Team Member
router.route('/addmember').post(Teammember)
router.route('/updatemember/:id').put(updatemember)
router.route('/displaymember').get(memberdisplay)
router.route('/singlemember/:id').get(singlemember)
router.route('/deletemember/:id').delete(deletemember)  
//Order
router.route('/createorder').post(Addorder)
router.route('/orderdetails').get(displayorder)
router.route('/Singleorder/:id').get(singleorder)
router.route('/deleteorder/:id').delete(Deleteorder)
router.route('/updateorder/:id').put(updateorder)

router.route('/addtocart').put(addtocart)
router.route('/cart').post(cart)
router.route('/removeitem').put(removeitemfromcart)

module.exports=router