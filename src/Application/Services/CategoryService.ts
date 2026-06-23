import { ICategoryService } from "../Interfaces/ICategoryService";
import { ICategoryRepository } from "../Interfaces/ICategoryRepository";
import { Category } from "../../Domain/Entities/Category";
import { CreateCategoryDto, UpdateCategoryDto } from "../DTOs/CategoryDto";

export class CategoryService implements ICategoryService {
  constructor(private readonly repository: ICategoryRepository) {}

  async createCategory(dto: CreateCategoryDto): Promise<Category> {
    if (!dto.title) throw new Error("Title is required");
    return this.repository.create(dto);
  }

  async getCategoryById(id: number): Promise<Category | null> {
    return this.repository.findById(id);
  }

  async getAllCategories(): Promise<Category[]> {
    return this.repository.findAll();
  }

  async updateCategory(id: number, dto: UpdateCategoryDto): Promise<Category> {
    if (!dto.title) throw new Error("Title is required");
    return this.repository.update(id, dto);
  }

  async deleteCategory(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
