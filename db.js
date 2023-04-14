const mongoose = require('mongoose');
const url ="mongodb+srv://anushreesharma232003:Anushree23@cluster1.0qacpfv.mongodb.net/test";

const database = module.exports = ()=>{
    const connectionParams={
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try {
        mongoose.connect(url, connectionParams)
        console.log("Database Connected Successfully!")
    } catch (error) {
        console.log(error)
        console.log("Database Connection Failed!")
    }
}