import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient, createPrismaClient } from '@workspace/database';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly client: PrismaClient;

  constructor() {
    this.client = createPrismaClient();
  }

  get product() {
    return this.client.product;
  }

  get user() {
    return this.client.user;
  }

  get post() {
    return this.client.post;
  }

  get publisher() {
    return this.client.publisher;
  }

  async onModuleInit() {
    await this.client.$connect();
  }

  async onModuleDestroy() {
    await this.client.$disconnect();
  }
}
