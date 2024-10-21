import jwt from "jsonwebtoken"
export const auth=(req, res, next)=>{
    if(!req.headers.authorization){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`No hay usuarios autenticados`})
    }

    try {
        // Bearer adsfads8asdf8.adf8asdf8asdf
        let token=req.headers.authorization.split(" ")[1]
        let usuario=jwt.verify(token, "pass123")
        req.usuario=usuario
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`${error.message}`})
    }

    next()
}