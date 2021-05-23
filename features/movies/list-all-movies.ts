import { Movie } from "../../entities";
import { MovieRepository } from "./movie-repository.interface";

export function buildListAllMovies(
  movieRepository: MovieRepository
): () => Movie[] {
  return function listAllMovies(): Movie[] {
    return movieRepository.findAll();
  };
}
