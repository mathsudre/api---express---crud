import database from "../../database"

const deleteProductService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM products WHERE id = $1 RETURNING *;",
      [id]
    );

    if (res.rows.length === 0) {
      throw "id não corresponde a nenhum produto";
    }

    return "Produto deletado";
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteProductService;