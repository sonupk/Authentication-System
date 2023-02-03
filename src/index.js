const express = require('express');
const route = require('./route/route.js');
const  mongoose  = require('mongoose');
const app = express();
app.use(express.json());



mongoose.connect("mongodb+srv://sonupk:1HivF6DXHWanVcYu@cluster0.vtjazgb.mongodb.net/AuthSystem-DB", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected on port 27017"))
    .catch(err => console.log(err))



app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});