const logger=(req, res, next)=>{
    console.log(`Fecha: ${new Date().toLocaleDateString()} | req. url: ${req.url} | método: ${req.method}`)

    next()
}

module.exports={logger}