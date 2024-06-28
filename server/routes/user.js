const express=require('express');
const{handelgetvisitor, handelupdatevisitor, }=require('../controllers/user')
const router=express.Router();

router.route('/').get(handelgetvisitor).post(handelupdatevisitor)







module.exports = router;