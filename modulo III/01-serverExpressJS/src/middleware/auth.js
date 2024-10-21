const auth=(req, res, next)=>{
    let {username, password}=req.query

    if(!username || !password){
        res.setHeader("Content-Type", "application/json")
        return res.status(401).send({error:`Error 401 | no autenticado`})
    }
    
    if(username!="admin" || password!="123"){
        res.setHeader("Content-Type", "application/json")
        return res.status(401).send({error:`Error 401 | credenciales inválidas`})
    }


    next()
}

module.exports={auth}