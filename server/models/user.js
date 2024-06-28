
const mongoose = require('mongoose');
// //creating schema
const userschema = new mongoose.Schema(
    {
      
        visitor: {
            type: Number
        },
        
    }, { timestamps: true });



const User = mongoose.model('visitors', userschema);



module.exports = User;