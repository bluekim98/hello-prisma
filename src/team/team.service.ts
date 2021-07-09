import { Prisma, Team } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { identity } from 'rxjs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TeamService {
    constructor(private prismaService: PrismaService){}

    async findTeam(teamWhereUniqueInput: Prisma.TeamWhereUniqueInput) {
        return await this.prismaService.team.findUnique({where: teamWhereUniqueInput, include: {users: true}});
    }
}

