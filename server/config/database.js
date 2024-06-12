const mongoose = require("mongoose")

const databaseConnection = async (MONGO_URI) => 
{
    mongoose.connect(MONGO_URI)
    .then(con => console.log(`Database is running on: ${con.connection.host}`))
    .catch(error => console.log(`An error occurred in mongodb: ${error}`))
}

module.exports = databaseConnection