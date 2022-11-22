const{response} = require('express');
const Encuestas = require('../models/Encuestas');

const getEncuestas = async (req, res=response)=> {

    const encuestas = await Encuestas.find()
    res.json({
        msg: 'GET API Encuestas',
        encuestas
    })
};

const postEncuestas = async (req,res) =>{
    const {nombreEncuesta, documentoEncuestado, fecha, nombreEncuestado, edad, genero, empleado} = req.body
    
    const encuestas = new Encuestas({nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado})

    await encuestas.save()

    res.json({
        msg: 'POST API Encuestas',
        encuestas
    })


};

const putEncuestas = async (req, res)=>{
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body
    const encuestas = await Encuestas.findOneAndUpdate({nombreEncuesta: nombreEncuesta}, {fecha: fecha, documentoEncuestado: documentoEncuestado, nombreEncuestado: nombreEncuestado, edad: edad, genero: genero, empleado: empleado})

    res.json({
        msg: "PUT API Encuestas",
        encuestas
    })
};

const patchEncuestas = async (req,res)=>{
    const { documentoEncuestado, empleado} = req.body
    const encuestas = await Encuestas.findOneAndUpdate({documentoEncuestado: documentoEncuestado}, {empleado: empleado})

    res.json({
        msg: "PATCH API Encuesta",
        encuestas
    })
};

const deleteEncuestas = async(req, res) =>{
    const { documentoEncuestado } = req.query

    const encuestas = await Encuestas.findOneAndDelete({documentoEncuestado : documentoEncuestado})

    res.json({
        msg: 'DELETE API Encuestas',
        encuestas
    })
};

module.exports = {
    getEncuestas,
    postEncuestas,
    putEncuestas,
    patchEncuestas,
    deleteEncuestas
};


/*SAPO PERRA*/