const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoute=require('./routes/UserRoutes');

const app = express();
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('api/user',(req,res)=>{
    console.log(req.body)
    res.json({status:'ok'})
})

mongoose.connect(
    'mongodb://localhost:27017/bloomingdalesUsers',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
).then(()=>{
    app.listen(9999,()=>{
        console.log('Login service up & running on port 9999');
    })
}).catch(error=>{
    console.log(error)
});

app.use('/api/v1/userRoute',userRoute);
