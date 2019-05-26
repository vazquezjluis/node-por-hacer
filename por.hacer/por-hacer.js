const fs = require('fs');

let listadoPorHacer = [];

const getListado = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}


const borrar = (descripcion) => {
    cargarDB();

    listadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    guardarDB();
}
const crear = (descripcion) => {


    cargarDB();


    let porHacer = {
        descripcion,
        completado: false
    };


    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('DATOS GUARDADOS');
    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}