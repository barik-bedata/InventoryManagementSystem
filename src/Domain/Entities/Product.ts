export class Product {
  constructor(
    public readonly id: number,
    public title: string,
    public categoryId: number,
    public tag: string | null,
    public readonly createdAt: Date,
    public updatedAt: Date
  ) {}
}
