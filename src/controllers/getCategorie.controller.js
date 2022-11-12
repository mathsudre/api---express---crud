import getCategorieService from "../services/categoryServices/getCategorie.service";

const getCategorieController = async (request, response) => {
    const {id} = request.params
  try {
    const getCategorie = await getCategorieService(id);
    return response.status(200).json(getCategorie);
  } catch (err) {
    return response.status(400).json({message:err.message});
  }
};

export default getCategorieController;