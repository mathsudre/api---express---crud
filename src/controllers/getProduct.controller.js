import getProductService from "../services/productsServices/getProduct.service";

const getProductController = async (request, response) => {
    const {id} = request.params
  try {
    const getProduct = await getProductService(id);
    return response.status(200).json(getProduct);
  } catch (err) {
    return response.status(400).json({message:err.message});
  }
};

export default getProductController;