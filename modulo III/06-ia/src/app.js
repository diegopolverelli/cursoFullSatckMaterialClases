import express from 'express';
// const { GoogleGenerativeAI } = require("@google/generative-ai");
import { GoogleGenerativeAI } from "@google/generative-ai"
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
})

const consultaIA = async (consulta = "") => {
    // Make sure to include these imports:
    // import { GoogleGenerativeAI } from "@google/generative-ai";
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // const prompt = "Write a story about a magic backpack.";

    const result = await model.generateContent(consulta);
    // console.log(result.response.text());
    let datos = result.response.text()
    console.log(datos);
    return datos
}

app.get("/consulta2", async (req, res) => {
    let { consulta } = req.query
    if (!consulta) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `Ingrese consulta` })
    }

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let result
    try {
        result = await model.generateContentStream(consulta);
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json({ error: `${error.message}` })
    }

    try {
        // Print text as it comes in.
        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            // process.stdout.write(chunkText);
            console.log(chunkText)
            res.write(chunkText)
        }

        res.end()

    } catch (error) {
        console.log(error.message)
        res.write(error.message)
        res.end()
    }

})

app.get("/consulta", async (req, res) => {
    let { consulta } = req.query
    if (!consulta) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `Ingrese consulta` })
    }

    let data = await consultaIA(consulta)

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ payload: data });

})

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});
