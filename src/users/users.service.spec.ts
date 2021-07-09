import { Prisma, User } from '.prisma/client';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { UsersService } from './users.service';
const data = require('../db/test-data/data');


describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
      imports: [AppModule]
    }).compile();
    jest.setTimeout(10000000);

    service = module.get<UsersService>(UsersService);
  });

  /*
  beforeEach(async () => {
    await service.truncate();

    const users: Prisma.UserCreateInput[] = data.users;
    let user: Prisma.UserCreateInput;
    for(user of users) {
      await service.createUser(user);
    }
  });
  */


  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /*
  it('test data !',async () => {
    await service.truncate();
    const test = 'Prisma CRUD Test';
    console.time(test);
    for(let i = 0; i < 30; i++) {
      await service.createUser({
        email: `test_${i}@email.com`,
        name: `test${i}`,
        nickname: `test${i}_test${i}`,
        team: {
          connect: {id: 1}
        }
      });
    }
    console.timeEnd(test);

    expect(1).toBe(1);
  });
*/
  
  /*
  it('should be matched', async () => {
    const email: string = 'blue@email.com';
    const userWhereUniqueInput: Prisma.UserWhereUniqueInput = {
      email
    }
    const findedUser: User = await service.findUserByEamil(userWhereUniqueInput);
    expect(userWhereUniqueInput.email).toBe(findedUser.email);
  });
  */
});
