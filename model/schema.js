
const mongoose = require("mongoose")


  const Portal = new mongoose.Schema({ 
        
       companyName : String,
       logo: String,
       jobPosition:String,
       salary: String,
       workingEmployee:String,
       jobType:String,
       jobWork:String,
       location:String,
       Description:String,
       aboutCompany:String,
       skills:[String],     
    },
    {
        timestamps: true,
    } 
    );

    
    const jobPortal = mongoose.model('jobPortal', Portal);

    
    var my_schemas = {
       "jobPortal": jobPortal,
    };

module.exports = my_schemas;