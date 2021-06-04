import { Module } from '@nestjs/common';
import { MovieRepositoryService } from './movie-repository.service';

@Module({
  providers: [
    {
      provide: 'IMovieRepository',
      useExisting: MovieRepositoryService,
    },
  ],
})
export class PersistanceModule {}
