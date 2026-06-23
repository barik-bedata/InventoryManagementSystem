import { Router } from "express";
import { CategoryController } from "../Controllers/CategoryController";

export const CategoryRoutes = (controller: CategoryController): Router => {
  const router = Router();
  router.post("/", controller.create);
  router.get("/", controller.getAll);
  router.get("/:id", controller.getById);
  router.put("/:id", controller.update);
  router.delete("/:id", controller.delete);
  return router;
};
