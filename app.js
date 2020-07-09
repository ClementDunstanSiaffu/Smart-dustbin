require('./models/db')
const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes/index')



app.get('/:volume/give/:location',routes.receiveVolume);
app.get('/pata',routes.getVolume);

app.listen(PORT,()=>{
    console.log(`Listening to the port ${PORT}`)
})