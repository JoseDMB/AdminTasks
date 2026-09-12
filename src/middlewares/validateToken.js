//Esos 3 parametros definen la funcion de middleware, req es la peticion, res es la respuesta y next es para pasar al siguiente middleware
import jwt from 'jsonwebtoken';
import {TOKEN_SECRET} from '../config.js';

export const validateToken = async (req, res, next) => {

    const { token } = req.cookies;

    if(!token) return res.status(401).json({message: "No token, authorization denied"});

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if(err) return res.status(401).json({message: "Token is not valid"});
        req.user= user;
         next();
    })
}