import getProdCategoryService from "../services/productsServices/getProdCategory.service";


const getProdCategoryController = async (request,response) => {
    const {category_id} = request.params;
    try {
        const allProds = await getProdCategoryService(category_id)
        return response.status(200).json(allProds)
    } catch (err) {
        return response.status(401).json({message:err.message})
    }
}

export default getProdCategoryController;