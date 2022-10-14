import express = require('express');
import cors = require('cors');
import router from "../routes/usr.routes";




export class Server {

    public app: express.Application;
    public port: any
    public path: string;

    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        this.path = '/api'

        //Middlewares
        this.middlewares();
        //Rutas Server
        this.routes()
    }

    /**
     * 
     * @returns una sola instancia de la clase
     */
    static init() {
        return new Server();
    }

    /**
     * start
     * escucha activa en el puerto definido en el constructor
     */
    start() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }

    middlewares() {
        //Directorio Publico
        this.app.use(express.static('public'))
        //Cors
        this.app.use(cors());
        //recibe informacion tipo json
        this.app.use(express.json())
    }

    /**
     * routes
     * Contienen los diferentes endpoint del servidor, separados de forma modular
     */
    routes() {
        this.app.use(router)
    }

}