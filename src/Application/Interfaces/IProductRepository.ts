import { Product } from "../../Domain/Entities/Product";

export interface IProductRepository {
  create(product: Omit<Product, "id" | "createdAt" | "updatedAt">): Promise<Product>;
  findById(id: number): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  update(id: number, product: Partial<Product>): Promise<Product>;
  delete(id: number): Promise<void>;
}
