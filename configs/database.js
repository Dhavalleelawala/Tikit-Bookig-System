
const { default: mongoose } = require("mongoose");

const db = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected.");        
    } catch (error) {
        console.log(error.message);        
    }
}

module.exports = db;