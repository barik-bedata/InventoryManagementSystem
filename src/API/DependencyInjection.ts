import { dbContext } from "../Infrastructure/Data/AppDbContext";
import { CategoryRepository } from "../Infrastructure/Repositories/CategoryRepository";
import { ProductRepository } from "../Infrastructure/Repositories/ProductRepository";
import { CategoryService } from "../Application/Services/CategoryService";
import { ProductService } from "../Application/Services/ProductService";
import { CategoryController } from "./Controllers/CategoryController";
import { ProductController } from "./Controllers/ProductController";

export class DependencyInjection {
  public readonly categoryController: CategoryController;
  public readonly productController: ProductController;

  constructor() {
    // 1. Initialize Infrastructure Repositories
    const categoryRepo = new CategoryRepository(dbContext);
    const productRepo = new ProductRepository(dbContext);

    // 2. Initialize Application Services
    const categoryService = new CategoryService(categoryRepo);
    const productService = new ProductService(productRepo);

    // 3. Initialize API Controllers
    this.categoryController = new CategoryController(categoryService);
    this.productController = new ProductController(productService);
  }
}

export const DI = new DependencyInjection();
