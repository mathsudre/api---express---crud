import getAllProductsService from "../services/productsServices/getAllProducts.service"


const getAllProductsController = async (request, response) => {
    try {
      const getAllProducts= await getAllProductsService();
      return response.status(200).json(getAllProducts);
    } catch (err) {
      return response.status(400).json({message:err.message});
    }
  };
  
  export default getAllProductsController;