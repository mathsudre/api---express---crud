import database from "../../database";

const createProductService = async (product) => {
  const { name, price, category_id } = product;

  try {
    const res = await database.query(
      "INSERT INTO products(name, price, category_id) VALUES($1, $2, $3) RETURNING *;",
      [name, price, category_id]
    );

    return { message: "Categoria criada", product: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};

export default createProductService;
