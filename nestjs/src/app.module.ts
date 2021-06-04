import { Module } from '@nestjs/common';
import { FeaturesModule } from './features/features.module';
import { MovieController } from './movie.controller';
import { PersistanceModule } from './persistance/persistance.module';
import { MovieRepositoryService } from './persistance/movie-repository.service';

@Module({
  imports: [FeaturesModule, PersistanceModule],
  controllers: [MovieController],
  providers: [MovieRepositoryService],
})
export class AppModule {}
