import { Test, TestingModule } from '@nestjs/testing';
import { MoviesFeatures } from './movie.features';

describe('MoviesService', () => {
  let service: MoviesFeatures;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesFeatures],
    }).compile();

    service = module.get<MoviesFeatures>(MoviesFeatures);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
