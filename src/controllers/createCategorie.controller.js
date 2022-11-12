import createCategorieService from "../services/categoryServices/createCategorie.service";

const createCategorieController = async (request,response) => {
    const { name } = request.body;

    try {
        const createCategory = await createCategorieService(name)
        return response.status(201).json(createCategory);
    } catch (err) {
        return response.status(400).json({
            message:err.message
        });
    }

}

export default createCategorieController;