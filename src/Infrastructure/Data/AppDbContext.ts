import { PrismaClient } from '@prisma/client';

export class AppDbContext {
  public readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
}

export const dbContext = new AppDbContext();
