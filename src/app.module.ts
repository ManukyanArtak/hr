import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { MeetingsModule } from './modules/meetings/meetings.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { User } from './modules/users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './modules/companies/companies.entity';
import { CompanyUsers } from './database/entyties/ManyToManyEntytis/companyUsers.entity';
import { ConfigModule } from '@nestjs/config';
import { GuestsModule } from './modules/guests/guests.module';
import { RoomsModule } from './modules/rooms/rooms.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { NotificationsService } from './modules/notifications/notifications.service';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT as any,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Company, CompanyUsers],
      synchronize: false,
    }),
    UsersModule,
    MeetingsModule,
    CompaniesModule,
    GuestsModule,
    RoomsModule,
    JobsModule,
    NotificationsModule,
    AuthModule,
  ],
  providers: [NotificationsService],
})
export class AppModule {}
