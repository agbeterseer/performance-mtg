const mongoose = require('mongoose');
require('dotenv/config');

class DBConnection {
    dbConnect(){
        mongoose.connect(process.env.DB_CONNECTION, () =>{
            console.log('connected to DB !!');
        }).then(()=>console.log('connected'))
        .catch(e=>console.log(e));        
    }

}

module.exports = DBConnection;