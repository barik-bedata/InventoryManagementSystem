export interface CreateProductDto {
  title: string;
  categoryId: number;
  tag?: string;
}

export interface UpdateProductDto {
  title: string;
  categoryId: number;
  tag?: string;
}
