const express  = require("express");
const { testRoute } = require("./routes/testRoutes");

const app = express();

app.use(testRoute)

let port = 5000;
app.listen(port,()=>{
    console.log('Listening port = '+port)
})