import getAllCategoriesService from "../services/categoryServices/getAllCategories.service";

const getAllCategoriesController = async (request, response) => {
  try {
    const getCategories = await getAllCategoriesService();
    return response.status(200).json(getCategories);
  } catch (err) {
    return response.status(400).json({message:err.message});
  }
};

export default getAllCategoriesController;
