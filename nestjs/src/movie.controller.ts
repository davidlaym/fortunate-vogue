import { Controller, Get } from '@nestjs/common';
import { MoviesFeatures } from './features/movie.features';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MoviesFeatures) {}
  @Get()
  async getAll(): Promise<Record<string, unknown>[]> {
    const result = (await this.movieService.getAll()) as unknown;
    return result as Record<string, unknown>[];
  }
}
