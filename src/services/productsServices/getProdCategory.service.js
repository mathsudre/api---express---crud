import database from "../../database";

const getProdCategoryService = async (categoryId) => {
        
  try {
    const res = await database.query("SELECT p.*,c.name as category FROM products p JOIN categories c ON p.category_id = $1", 
    [categoryId]);
    
    return res.rows
  } catch (err) {
    throw new Error(err);
  }
};

export default getProdCategoryService;