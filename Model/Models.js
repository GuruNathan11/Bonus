var mongoose = require('mongoose');
var { Schema } = mongoose;

var Schema = new Schema({
    companyName:{
        required : true,
        type     : String
    },
    bonusRatio:{
        required : true,
        type : String
    },
    announcement:{
        required : true,
        type     : String
    },
    record:{
        required : true,
        type     : String
    },
    ex_bonus:{
        required : true,
        type     : String
    }
   
},{versionKey:false});

Schema.path('companyName').validate(async (companyName) => {
    const nameCount = await mongoose.models.company.countDocuments({ companyName })
    return !nameCount
},'Name already Exists');


var users = module.exports = mongoose.model('company',Schema);
module.exports.get = function(callback,limit){
    users.find(callback).limit(limit);
}