import fs from "fs"

export class ProductosManager{
    static path=""

    static getProductos(){
        if(fs.existsSync(this.path)){
            return JSON.parse(fs.readFileSync(this.path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }

}