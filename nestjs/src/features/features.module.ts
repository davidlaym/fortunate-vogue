import { Module } from '@nestjs/common';
import { IMovieRepository } from 'features';
import { MoviesFeatures } from './movie.features';

@Module({
  providers: [
    {
      provide: MoviesFeatures,
      useFactory: () => {
        const fakeMovieRepository: Partial<IMovieRepository> = {
          findAll: () => [{ title: 'test', plot: 'a test', genres: ['Test'] }],
        };
        return new MoviesFeatures(fakeMovieRepository as IMovieRepository);
      },
    },
  ],
  exports: [MoviesFeatures],
})
export class FeaturesModule {}
