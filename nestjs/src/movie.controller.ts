import { Controller, Get, Inject } from '@nestjs/common';
import { MoviesFeatures } from './features/movie.features';

@Controller('movie')
export class MovieController {
  constructor(@Inject() private readonly movieService: MoviesFeatures) {}
  @Get()
  getAll(): Record<string, unknown>[] {
    return this.movieService.getAll() as unknown as Record<string, unknown>[];
  }
}
