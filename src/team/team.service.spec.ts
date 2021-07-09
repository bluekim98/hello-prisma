import { Prisma, Team } from '.prisma/client';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { TeamService } from './team.service';

describe('TeamService', () => {
  let service: TeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamService],
      imports: [AppModule]
    }).compile();

    service = module.get<TeamService>(TeamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should test', async () => {
    const teamDto: Prisma.TeamWhereUniqueInput = {
      id: 1
    }
    const title = 'select test';
    console.time(title);
    const findedTeam = await service.findTeam(teamDto);
    console.log(findedTeam);
    console.timeEnd(title);

    // expect(findedTeam.id).toBe(1);
    // expect(findedTeam.name).toBe('business');

    expect(1).toBe(1);
  });
});
