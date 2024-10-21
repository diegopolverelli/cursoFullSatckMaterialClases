import fs from "fs"
export class CursosDAO{
    static path=""

    static getCursos(){
        if(fs.existsSync(this.path)){
            return JSON.parse(fs.readFileSync(this.path, {encoding:"utf-8"}))
        }else{
            []
        }
    }

    static getCursoByid(id){
        let cursos=this.getCursos()
        let curso=cursos.find(c=>c.id===id)
        return curso
    }
}