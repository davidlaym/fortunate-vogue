import { Movie } from '../../entities';
import { IMovieRepository } from './movie-repository.interface';

export function buildListAllMovies(
  movieRepository: IMovieRepository,
): () => Promise<Movie[]> {
  return async function listAllMovies(): Promise<Movie[]> {
    return movieRepository.findAll();
  };
}
