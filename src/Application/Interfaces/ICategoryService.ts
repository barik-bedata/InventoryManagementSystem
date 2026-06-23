import { Category } from "../../Domain/Entities/Category";
import { CreateCategoryDto, UpdateCategoryDto } from "../DTOs/CategoryDto";

export interface ICategoryService {
  createCategory(dto: CreateCategoryDto): Promise<Category>;
  getCategoryById(id: number): Promise<Category | null>;
  getAllCategories(): Promise<Category[]>;
  updateCategory(id: number, dto: UpdateCategoryDto): Promise<Category>;
  deleteCategory(id: number): Promise<void>;
}
