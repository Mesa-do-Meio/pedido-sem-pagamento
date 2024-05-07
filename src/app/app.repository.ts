import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class AppRepository {
  constructor(private readonly databaseInstance: DatabaseService) { }

  async getHealth(): Promise<{ status: string }> {
    return { status: 'OK' };
  }
}