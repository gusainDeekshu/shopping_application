const User = require("../models/user")



async function handelgetvisitor(req, res) {
    const visitors = await User.findOne({_id:'667de059eda36ec7e26cdc82'});
    return res.json(visitors.visitor);
}



async function handelupdatevisitor(req, res) {
    const visitors = await User.findOne({_id:'667de059eda36ec7e26cdc82'});
    console.log(visitors.visitor)
    const add=visitors.visitor+1

    const user = await User.findByIdAndUpdate('667de059eda36ec7e26cdc82', { visitor: add  })
    res.json({ status: "edited sucessfully " });
}








module.exports = {
    handelgetvisitor, handelupdatevisitor,
}