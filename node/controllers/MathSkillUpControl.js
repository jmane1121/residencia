//*importar el modelo
import BlogModel from "../models/MathSkillUpModel.js";

//*metodos para el CRUD
//*mostrar todos los registros
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();
    res.json(blogs);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//*mostrar un registro
export const getBlog = async (req, res) => {
  try {
    const blog = BlogModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(blog);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//*crear un registro
export const createBlog = async (req, res) => {
  try {
    await BlogModel.create(req.body);
    res.json({
      message: "Registro exitoso",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//*actualizar un registro
export const updateBlog = async (req, res) => {
  try {
    BlogModel.update(res.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Actualizado",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//*eliminar un registro
 
export const deleteBlog = async (req, res) => {
  try {
    await BlogModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "Eliminado",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
