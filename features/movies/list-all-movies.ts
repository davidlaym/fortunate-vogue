import { Movie } from '../../entities';
import { IMovieRepository } from './movie-repository.interface';

export function buildListAllMovies(
  movieRepository: IMovieRepository,
): () => Movie[] {
  return function listAllMovies(): Movie[] {
    return movieRepository.findAll();
  };
}
