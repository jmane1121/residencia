//* un modelo es una abstraccion que representa una tabla en la BD
//* nombre en singular e inicia con mayusscula
//* se importa la DB y DataTypes de sequelize
import db from "../database/db.js";
import { DataTypes } from "sequelize";

//? se pone el nombre de la tabla
const BlogModel = db.define('blogs',{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING}
})

export default BlogModel