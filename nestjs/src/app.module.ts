import { Module } from '@nestjs/common';
import { FeaturesModule } from './features/features.module';
import { MovieController } from './movie.controller';

@Module({
  imports: [FeaturesModule],
  controllers: [MovieController],
})
export class AppModule {}
