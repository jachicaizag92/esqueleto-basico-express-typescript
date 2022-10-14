require('dotenv').config()

import {Server} from './models/server';




/**
 * instancia del servidor en el archivo principal app
 */
const server = Server.init()


/**
 * inicializacion y escucha del metodo de la clase server
 */
server.start();