import { Router } from "express";
import createCategoriesController from "../controllers/createCategorie.controller";
import deleteCategoryController from "../controllers/deleteCategory.controller";
import getAllCategoriesController from "../controllers/getAllCategories.controller";
import getCategorieController from "../controllers/getCategorie.controller";
import updateCategoryController from "../controllers/updateCategory.controller";
import updateSerializerMiddleware from "../middlewares/updateSerializer.middleware";
import { editSerializer } from "../serializers/category.serializer";

const categoriesRoutes = Router();

categoriesRoutes.get("", getAllCategoriesController);
categoriesRoutes.get("/:id", getCategorieController);
categoriesRoutes.post("", createCategoriesController);
categoriesRoutes.patch(
  "/:id",
  updateSerializerMiddleware(editSerializer),
  updateCategoryController
);

categoriesRoutes.delete("/:id", deleteCategoryController);

export default categoriesRoutes;
