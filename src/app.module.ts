import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { PrismaService } from './prisma/prisma.service';
import { TeamService } from './team/team.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UsersService, PrismaService, TeamService],
  exports: [UsersService, PrismaService, TeamService]
})
export class AppModule {}
