import { Prisma, User } from '.prisma/client';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let userCreateInput: Prisma.UserCreateInput;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
      imports: [AppModule]
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  beforeEach(() => {
    userCreateInput = {
      email: 'blue@email.com',
      name: '아이유',
      nickname: 'blue',
    }
  });

  afterAll(() => {
    service.truncate();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be created user', async () => {
    const createdUser: User = await service.createUser(userCreateInput);
    expect(createdUser.name).toBe(userCreateInput.name);
  });
  
  it('should be matched', async () => {
    const userWhereUniqueInput: Prisma.UserWhereUniqueInput = {
      email: userCreateInput.email
    }
    const findedUser: User = await service.findUser(userWhereUniqueInput);
    console.log(findedUser);
    expect(userWhereUniqueInput.email).toBe(findedUser.email);
  });
});
