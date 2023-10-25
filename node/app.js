import express from 'express'
import cors from 'cors'
//importar conexion a DB
import db from './database/db.js'
//importar el enrutador
import blogsRoutes from './routes/routes.js'

const app = express()

app.use(cors ())
app.use(express.json())
app.use('/blogs', blogsRoutes)

try {
    await db.authenticate()
    console.log("Conexion exitosa a la BD")
} catch (error) {
    console.log(`conexion fallida a la BD: ${error}`)
}

app.get('/',(req, res)=>{
    res.send('HOLA MUNDO')
})

app.listen(8000, ()=>{
    console.log("SERVER UP running in http://localhost:8000/")
})