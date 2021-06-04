import { Injectable } from '@nestjs/common';
import { Movie } from 'entities';
import { MovieRepository } from 'persistance';
import { IMovieRepository } from 'features';

@Injectable()
export class MovieRepositoryService implements IMovieRepository {
  toMakeEsLintHappy: string;
  readonly #movieRepository: IMovieRepository;

  async findAll(): Promise<Movie[]> {
    return this.#movieRepository.findAll();
  }

  constructor() {
    this.#movieRepository = new MovieRepository();
    this.toMakeEsLintHappy = 'happy';
  }
}
