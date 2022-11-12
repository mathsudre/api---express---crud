import createProductService from "../services/productsServices/createProduct.service";

const createProductController = async (request, response) => {
  const product = request.body;

  try {
    const createdProduct = await createProductService(product);
    return response.status(201).json(createdProduct);
  } catch (error) {
    return response.status(400).json({message:error.message});
  }
};

export default createProductController;
