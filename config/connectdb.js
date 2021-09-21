//connect to mongoose db
const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' })
const ConnectDB=()=>{
    mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then((res)=>console.log('data base connected'+res))
.catch((err)=>console.log('cannot connect'+err));
}
module.exports = ConnectDB;