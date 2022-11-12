import database from "../../database";

const getProductService = async (id) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id=$1;", 
    [id]);
    return {name:res.rows[0].name}
  } catch (err) {
    throw new Error(err);
  }
};

export default getProductService;
