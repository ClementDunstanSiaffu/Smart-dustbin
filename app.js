require('./models/db')
require('./models/db2')
const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes/index')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('/:volume/give/:location',routes.receiveVolume);
app.get('/pata',routes.getVolume);
app.post('/pokea',routes.pokea);
app.post('/ondoa',routes.ondoa);
app.get('/obtain',routes.pata)

app.listen(PORT,()=>{
    console.log(`Listening to the port ${PORT}`)
})