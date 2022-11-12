import database from "../../database";

const getCategorieService = async (id) => {
  try {
    const res = await database.query("SELECT * FROM categories WHERE id=$1;", 
    [id]);
    return {name:res.rows[0].name}
  } catch (err) {
    throw new Error(err);
  }
};

export default getCategorieService;
