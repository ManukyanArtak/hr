import { Module } from '@nestjs/common';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './companies.entity';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService],
  imports: [TypeOrmModule.forFeature([Company])],
})
export class CompaniesModule {}
