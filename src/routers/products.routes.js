import { Router } from "express";
import createProductController from "../controllers/createdProduct.controller";
import deleteProductController from "../controllers/deleteProduct.controller";
import getAllProductsController from "../controllers/getAllProducts.controller";
import getProdCategoryController from "../controllers/getProdCategory.controller";
import getProductController from "../controllers/getProduct.controller";
import updateProductController from "../controllers/updateProduct.controller";
import updateSerializerMiddleware from "../middlewares/updateSerializer.middleware";
import { editSerializer } from "../serializers/category.serializer";

const productsRoutes = Router();

productsRoutes.get("", getAllProductsController);
productsRoutes.get("/:id", getProductController);
productsRoutes.post("", createProductController);
productsRoutes.patch(
  "/:id",
  updateSerializerMiddleware(editSerializer),
  updateProductController
);
productsRoutes.get("/category/:category_id", getProdCategoryController);
productsRoutes.delete("/:id", deleteProductController);

export default productsRoutes;
