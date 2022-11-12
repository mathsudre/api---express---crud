import deleteProductService from "../services/productsServices/deleteProduct.service";


const deleteProductController = async (request, response) => {
    const {id} = request.params;

    try {
        const delProduct = await deleteProductService(id);
        return response.status(204).json(delProduct);
    } catch (err) {
        return response.status(400).json({message:err.message});
    }
}

export default deleteProductController;