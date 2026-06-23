import { Product } from "../../Domain/Entities/Product";
import { CreateProductDto, UpdateProductDto } from "../DTOs/ProductDto";

export interface IProductService {
  createProduct(dto: CreateProductDto): Promise<Product>;
  getProductById(id: number): Promise<Product | null>;
  getAllProducts(): Promise<Product[]>;
  updateProduct(id: number, dto: UpdateProductDto): Promise<Product>;
  deleteProduct(id: number): Promise<void>;
}
