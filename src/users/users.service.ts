import { Prisma, User } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService){}

    async createUser(userCreateInput: Prisma.UserCreateInput): Promise<User> {
        return this.prismaService.user.create({
            data :userCreateInput
        });
    }

    async findUser(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
        return this.prismaService.user.findUnique({
            where: userWhereUniqueInput
        });
    }

    async truncate() {
        await this.prismaService.user.deleteMany({where: {}})
    }
}
