var Postal = require('../models/postal');
//All postals
exports.inq = function (req, res) {
    Postal.find(function (err, postal) {
        console.log(postal);
        if (err) return console.log(err);
        res.send(postal);
        console.log("C Postales encontrados...");
    })
};

//Listado de ciudades sin repetir
exports.inqCiudad = function (req, res) {
    Postal.distinct("d_ciudad", (err, postal) => {
        if (err) return console.log(err);
        console.log(postal.sort()); 
        res.send(postal.sort());
        console.log("Ciudades encontradas...");
    })
};

exports.inqByMnpio = (req, res) => {
    Postal.findOne({d_mnpio:req.params.mnpio}, (err, postal) => {
        if (err) return console.log(err);
        res.send(postal);
        console.log("Municipio encontrado: "+req.params.mnpio);
    })
    };

//Request Postal ID
exports.inqId = (req, res) => {
    Postal.findById(req.params.id, (err, postal) => {
    if (err) return console.log(err);
    res.send(postal);
    console.log("Postal encontrado: "+req.params.id);
    })
};
//Request Postal City
exports.inqByName = (req, res) => {
    Postal.findOne({d_codigo:req.params.codigo}, (err, postal) => {
    if (err) return console.log(err);
    res.send(postal);
    console.log("Postales encontrado: "+req.params.codigo);
    })
};