import updateCategoryService from "../services/categoryServices/updateCategory.service";


const updateCategoryController = async (request,response) => {
    const updateInfo = request.editValidatedBody
    const {id} = request.params

    try {
        const update = await updateCategoryService(updateInfo,id)
        return response.status(200).json(update)
    } catch (err) {
        return response.status(400).json({message:err.message})
    }
}
export default updateCategoryController