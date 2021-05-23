import { Injectable } from '@nestjs/common';
import { buildListAllMovies, IMovieRepository } from 'features';
import { Movie } from 'entities';

@Injectable()
export class MoviesFeatures {
  private listAllMovies: () => Movie[];
  constructor(movieRepository: IMovieRepository) {
    this.listAllMovies = buildListAllMovies(movieRepository);
  }

  getAll(): Movie[] {
    return this.listAllMovies();
  }
}
