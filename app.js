
//1.-Requerir librerías y drivers
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoDBUrl = require('./keys');
const PostalController = require('./controllers/admin');

//2.-Configurar web server y parsee los datos
const app = express();
const port = 3000;
app.use(bodyParser.json());

//3.- Definir paths disponibles
app.get('/', (req, res) => {
    res.send('Mongo Express.... Porfavor use /api/postales');
});
app.get('/api/postales', PostalController.inq);
app.get('/api/postales/:id', PostalController.inqId);
app.get('/api/postales/ciudades/:codigo', PostalController.inqByName);
app.get('/api/ciudades', PostalController.inqCiudad);
app.get('/api/postales/ciudades/:mnpio', PostalController.inqByMnpio);

//4.- Encender webserver y dbserver
app.listen(port, () => {
    console.log('Server Inicializado en el puerto: ' + port);
    mongoose.connect(MongoDBUrl.conn, { useNewUrlParser: true })
        .then(() => {
            console.log('Server mongodb Conectado...')
        }, err => { console.log(err) });
});