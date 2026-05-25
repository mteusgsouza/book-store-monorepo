import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.product.findMany({
      include: { publisher: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { publisher: true },
    });

    if (!product) throw new NotFoundException(`Product #${id} not found`);

    return product;
  }

  findAllPublic() {
    return this.prisma.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        image: true,
        authors: true,
        categories: true,
        tags: true,
        genre: true,
        label: true,
        publication_date: true,
        url: true,
        publisher: { select: { id: true, name: true, category: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOnePublic(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        price: true,
        image: true,
        authors: true,
        categories: true,
        tags: true,
        genre: true,
        label: true,
        publication_date: true,
        url: true,
        type_of_work: true,
        description: true,
        preview_images: true,
        publisher: { select: { id: true, name: true, category: true } },
      },
    });

    if (!product) throw new NotFoundException(`Product #${id} not found`);

    return product;
  }
}
