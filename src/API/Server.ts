import express from "express";
import { DI } from "./DependencyInjection";
import { CategoryRoutes } from "./Routes/CategoryRoutes";
import { ProductRoutes } from "./Routes/ProductRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Clean Architecture (DDD) Inventory API");
});

app.use("/categories", CategoryRoutes(DI.categoryController));
app.use("/products", ProductRoutes(DI.productController));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
