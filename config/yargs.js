const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true
}


const act = {
    descripcion,
    completado
}
const crea = {
    descripcion
}
const borr = {
    descripcion
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', crea)
    .command('actualizar', 'Actualiza el estado completado de una tarea', act)
    .command('borrar', 'Borra una tarea de la base', borr)
    .help()
    .argv;


module.exports = {
    argv
}