const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');

//console.log(argv);

crearArchivo(argv.base, argv.listar, argv.hasta)
	.then((nombreArchivo) => console.log(nombreArchivo.green, 'creado exitosamente'.green))
	.catch((err) => console.log(err));
