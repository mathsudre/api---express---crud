import database from "../../database";

const createCategorieService = async (categorie) => {
  const name = categorie;

  try {
    const res = await database.query(
      "INSERT INTO categories(name) VALUES($1) RETURNING *;",
      [name]
    );
   
    return { message: "Categoria criada", category: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};

export default createCategorieService;
