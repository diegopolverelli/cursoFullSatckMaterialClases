import mongoose from "mongoose";

export const conectarDB=async(url, db)=>{
    try {
        await mongoose.connect(
            url,
            {
                dbName: db
            }
        )

        console.log(`DB conectada...!!!`)
    } catch (error) {
        console.log(`Error al conectarse a DB: ${error.message}`)
    }
}