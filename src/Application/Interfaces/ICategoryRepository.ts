import { Category } from "../../Domain/Entities/Category";

export interface ICategoryRepository {
  create(category: Omit<Category, "id">): Promise<Category>;
  findById(id: number): Promise<Category | null>;
  findAll(): Promise<Category[]>;
  update(id: number, category: Partial<Category>): Promise<Category>;
  delete(id: number): Promise<void>;
}
