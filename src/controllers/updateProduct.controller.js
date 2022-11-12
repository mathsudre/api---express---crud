import updateProductService from "../services/productsServices/updateProduct.service"


const updateProductController = async (request,response) => {
    const updateInfo = request.editValidatedBody
    const {id} = request.params

    try {
        const update = await updateProductService(updateInfo,id)
        return response.status(200).json(update)
    } catch (err) {
        return response.status(400).json({message:err.message})
    }
}
export default updateProductController