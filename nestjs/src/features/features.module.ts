import { Module } from '@nestjs/common';
import { MoviesFeatures } from './movie.features';

@Module({
  providers: [MoviesFeatures],
})
export class FeaturesModule {}
