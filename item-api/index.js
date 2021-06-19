const express = require('express');
const mongoose = require('mongoose')

const itemRoute=require('./routes/ItemRoute');

const app = express();

mongoose.connect(
    'mongodb://localhost:27017/bloomingdales',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
).then(()=>{
    app.listen(3000,()=>{
        console.log('Item service up & running on port 3000');
    })
}).catch(error=>{
    console.log(error)
});

app.use('/api/v1/itemRoute',itemRoute);
