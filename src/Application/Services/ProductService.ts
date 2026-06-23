import { IProductService } from "../Interfaces/IProductService";
import { IProductRepository } from "../Interfaces/IProductRepository";
import { Product } from "../../Domain/Entities/Product";
import { CreateProductDto, UpdateProductDto } from "../DTOs/ProductDto";

export class ProductService implements IProductService {
  constructor(private readonly repository: IProductRepository) {}

  async createProduct(dto: CreateProductDto): Promise<Product> {
    if (!dto.title) throw new Error("Title is required");
    if (!dto.categoryId) throw new Error("Category ID is required");
    return this.repository.create({
      title: dto.title,
      categoryId: dto.categoryId,
      tag: dto.tag || null,
    });
  }

  async getProductById(id: number): Promise<Product | null> {
    return this.repository.findById(id);
  }

  async getAllProducts(): Promise<Product[]> {
    return this.repository.findAll();
  }

  async updateProduct(id: number, dto: UpdateProductDto): Promise<Product> {
    if (!dto.title) throw new Error("Title is required");
    if (!dto.categoryId) throw new Error("Category ID is required");
    return this.repository.update(id, {
      title: dto.title,
      categoryId: dto.categoryId,
      tag: dto.tag || null,
    });
  }

  async deleteProduct(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
