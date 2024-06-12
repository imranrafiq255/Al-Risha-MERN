const app = require("./app.js")
require("dotenv").config();
const databaseConnection = require("../server/config/database.js")
const PORT = process.env.PORT || 4500
databaseConnection(process.env.MONGO_URI)
app.listen(PORT, () => 
{
    console.log(`Server is running on port ${PORT}`);
})