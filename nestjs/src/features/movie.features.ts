import { Inject, Injectable } from '@nestjs/common';
import { buildListAllMovies, IMovieRepository } from 'features';
import { Movie } from 'entities';

@Injectable()
export class MoviesFeatures {
  private listAllMovies: () => Promise<Movie[]>;
  constructor(@Inject('IMovieRepository') movieRepository: IMovieRepository) {
    this.listAllMovies = buildListAllMovies(movieRepository);
  }

  async getAll(): Promise<Movie[]> {
    return this.listAllMovies();
  }
}
