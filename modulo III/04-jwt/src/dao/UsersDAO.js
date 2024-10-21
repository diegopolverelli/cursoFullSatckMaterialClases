import fs from "fs"
export class UsersDAO{
    static path=""

    static getUsers(){
        if(fs.existsSync(this.path)){
            return JSON.parse(fs.readFileSync(this.path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }

    static addUser(usuario={}){
        let usuarios=this.getUsers()
        let id=1
        if(usuarios.length>0){
            id=usuarios[usuarios.length-1].id + 1
        }

        let nuevoUsuario={
            id,
            ...usuario
        }

        usuarios.push(nuevoUsuario)

        fs.writeFileSync(this.path, JSON.stringify(usuarios, null, 5))

        return nuevoUsuario
    }
}