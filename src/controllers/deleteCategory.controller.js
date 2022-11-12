import deleteCategoryService from "../services/categoryServices/deleteCategory.service";


const deleteCategoryController = async (request, response) => {
    const {id} = request.params;

    try {
        const delCategory = await deleteCategoryService(id);
        return response.status(204).json(delCategory);
    } catch (err) {
        return response.status(400).json({message:err.message});
    }
}

export default deleteCategoryController;