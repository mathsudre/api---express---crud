import database from "../../database";

const getAllProductsService = async () => {
  try {
    const res = await database.query("SELECT * FROM products;");
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default getAllProductsService;
