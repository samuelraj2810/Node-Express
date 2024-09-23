const Mongoose = require("mongoose");
const DataBase = ()=> {
    try {
        Mongoose.connect(process.env.DataBase_URL)
        console.log("DataBase Connected...😎");
        
    } catch (error) {
       console.log("DataBase not Connected...☹️", error.message);
       
    }
}


module.exports = DataBase;