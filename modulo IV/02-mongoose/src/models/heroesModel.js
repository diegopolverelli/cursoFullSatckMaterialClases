import mongoose from "mongoose";

export const heroesModelo=mongoose.model(
    "heroes",
    new mongoose.Schema(
        {
            id: Number,
            name: {
                type: String, 
                unique: true
            }, 
            alias: String,
            powers: [],
            team: String,
            publisher: String, 
            enemies: []
        },
        {
            // collection:"heroes",
            timestamps: true,
            strict: false
        }
    )
)