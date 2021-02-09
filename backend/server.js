const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const createRoutes = express.Router();

let Create = require('./create.model');
// const { create } = require('./create.model');
// const create  = require('./create.model');

app.use(cors());
app.use(bodyParser.json());
app.use ('/create', createRoutes);


/// localhost:3001/create
createRoutes.route('/').get(function(req,res){
    console.log('req.body',req.body); //capture data from front-end and access in server
   
    Create.find(function(err,create){
        if(err){
            console.log(err);
        }
        else{
            res.json(create);
        }
    })

    // res.send({message:"hello!!!"});

});

app.get('/', function(req,res) {
    res.send({message:"SERVER UP"});
    });

createRoutes.route('/add').post(function(req,res){
   console.log('req.body',req.body); // CRUD for express test in postman
    //testing
    let exampleCreate = {
        fullname: req.body.fullname,
        description: req.body.description,
        duration: req.body.duration,
        price: req.body.price,
        date: req.body.date
    };

    let createObj = new Create(exampleCreate);
console.log('createOBJ:',createObj);

    createObj.save()
             .then(createResponse => {
                 res.json({'create': 'create added successfully'});
             })
             .catch(err => {
                 res.send(err);
             });
    
 //res.send(req.body);
//user inter info
});

createRoutes.route('/delete').post(function(req,res){
    Create.findByIdAndRemove(req.body.createId, function(err, response){
        if(err){
            res.send({message: 'error'})
        }else{
            res.send({message: 'success'})
        }
    });
})


mongoose.connect('mongodb+srv://Sansari:Sara1983@cluster0.j3anv.mongodb.net/ExerTracker?retryWrites=true&w=majority',{ useNewUrlParser : true });

const connection = mongoose.connection;

connection.once('open', function () {
    console.log('Mongoose database connection established successfully!!!');

})


 
app.listen(3001, function(){
    console.log('server is running on 3001!!!')
})