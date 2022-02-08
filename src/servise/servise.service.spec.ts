import { Test, TestingModule } from '@nestjs/testing';
import { ServiseService } from './servise.service';

describe('ServiseService', () => {
  let service: ServiseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiseService],
    }).compile();

    service = module.get<ServiseService>(ServiseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
