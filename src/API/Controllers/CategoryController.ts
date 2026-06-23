import { Request, Response } from "express";
import { ICategoryService } from "../../Application/Interfaces/ICategoryService";

export class CategoryController {
  constructor(private readonly categoryService: ICategoryService) {}

  public create = async (req: Request, res: Response): Promise<void> => {
    try {
      const category = await this.categoryService.createCategory(req.body);
      res.status(201).json(category);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  public getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const categories = await this.categoryService.getAllCategories();
      res.status(200).json(categories);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  public getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const category = await this.categoryService.getCategoryById(Number(req.params.id));
      if (!category) {
        res.status(404).json({ error: "Category not found" });
        return;
      }
      res.status(200).json(category);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  public update = async (req: Request, res: Response): Promise<void> => {
    try {
      const category = await this.categoryService.updateCategory(Number(req.params.id), req.body);
      res.status(200).json(category);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  public delete = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.categoryService.deleteCategory(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
}
