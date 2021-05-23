import { IGenericRepository } from '../generic-repository.interface';
import { Movie } from 'entities';

export interface IMovieRepository extends IGenericRepository<Movie> {
  toMakeEsLintHappy: string;
}
