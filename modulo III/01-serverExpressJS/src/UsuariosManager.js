const fs=require("fs")
const rutaArchivoUsuarios="./src/data/usuarios.json"

class UsuariosManager{
    static getUsuarios(){
        if(fs.existsSync(rutaArchivoUsuarios)){
            return JSON.parse(fs.readFileSync(rutaArchivoUsuarios, {encoding:"utf-8"}))
        }else{
            throw new Error("Ruta archivo usuarios inexistente")
        }
    }

    static addUser(usuario){
        let usuarios=this.getUsuarios()
        let id=1
        if(usuarios.length>0){
            id=usuarios[usuarios.length-1].id + 1
        }

        // usuario.id=id
        usuario={
            id, 
            ...usuario
        }
        usuarios.push(usuario)
        fs.writeFileSync(rutaArchivoUsuarios, JSON.stringify(usuarios, null, 5))
        return usuario
    }
}

module.exports=UsuariosManager