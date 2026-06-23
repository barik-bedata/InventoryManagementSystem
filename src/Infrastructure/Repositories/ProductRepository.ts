import { IProductRepository } from "../../Application/Interfaces/IProductRepository";
import { Product } from "../../Domain/Entities/Product";
import { AppDbContext } from "../Data/AppDbContext";

export class ProductRepository implements IProductRepository {
  constructor(private readonly db: AppDbContext) {}

  async create(product: Omit<Product, "id" | "createdAt" | "updatedAt">): Promise<Product> {
    const created = await this.db.prisma.product.create({
      data: {
        title: product.title,
        categoryId: product.categoryId,
        tag: product.tag,
      },
    });
    return new Product(created.id, created.title, created.categoryId, created.tag, created.createdAt, created.updatedAt);
  }

  async findById(id: number): Promise<Product | null> {
    const found = await this.db.prisma.product.findUnique({ where: { id } });
    if (!found) return null;
    return new Product(found.id, found.title, found.categoryId, found.tag, found.createdAt, found.updatedAt);
  }

  async findAll(): Promise<Product[]> {
    const products = await this.db.prisma.product.findMany();
    return products.map(
      (p) => new Product(p.id, p.title, p.categoryId, p.tag, p.createdAt, p.updatedAt)
    );
  }

  async update(id: number, product: Partial<Product>): Promise<Product> {
    const updated = await this.db.prisma.product.update({
      where: { id },
      data: {
        title: product.title,
        categoryId: product.categoryId,
        tag: product.tag,
      },
    });
    return new Product(updated.id, updated.title, updated.categoryId, updated.tag, updated.createdAt, updated.updatedAt);
  }

  async delete(id: number): Promise<void> {
    await this.db.prisma.product.delete({ where: { id } });
  }
}
