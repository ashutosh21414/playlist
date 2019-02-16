//Packages
var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Routes
var VideoHandlers = require('./routes') 


//Mongoose Setup
// mongoose.Promise = global.Promise;
// const option = {
//     socketTimeoutMS: 0,
//     connectTimeoutMS: 0,
//     useMongoClient: true
// };
// connect to db
mongoose.connect('mongodb://dev:dev123@ds239055.mlab.com:39055/playlist',{ useNewUrlParser: true }  ,function (err) {
    if (err)
        console.log(err);
    else
        console.log('connected..')
});


var app = express();
// app.use(bodyParser.urlencoded({
//     limit: "50mb",
//     parameterLimit: 50000,
//     extended: false
// }));
app.use(bodyParser.json({
    limit: "50mb"
}));

app.use('/api',VideoHandlers);





var server = http.createServer(app);
var port = 8000;
server.listen(port,function(f){
    console.log('Server started at port 8000');
})

