import { Movie } from 'entities';
import { IMovieRepository } from 'features';

export class MovieRepository implements IMovieRepository {
  toMakeEsLintHappy: string;

  constructor() {
    this.toMakeEsLintHappy = 'happy';
  }

  async findAll(): Promise<Movie[]> {
    return Promise.resolve([
      { title: 'test', plot: 'a test', genres: ['Test'] },
    ]);
  }
}
