import { Router } from "express";
import { ProductController } from "../Controllers/ProductController";

export const ProductRoutes = (controller: ProductController): Router => {
  const router = Router();
  router.post("/", controller.create);
  router.get("/", controller.getAll);
  router.get("/:id", controller.getById);
  router.put("/:id", controller.update);
  router.delete("/:id", controller.delete);
  return router;
};
