import { Request, Response } from "express"


/**
 * 
 * Configuración individual de los controladores
 */

export const usrGet = (req:Request, res:Response) => {
    res.json({
        status: true,
        msg: 'request GET - Controller'
    })
}

export const usrPut = (req: Request, res:Response) => {
    res.json({
        status: true,
        msg: 'Peticion PUT'
    })
}

export const usrPost = (req: Request, res:Response) => {
    res.json({
        status: true,
        msg: 'Peticion POST'
    })
}

export const usrDelete = (req: Request, res:Response) => {
    res.json({
        status: true,
        msg: 'Peticion DELETE'
    })
}

