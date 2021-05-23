import { buildListAllMovies } from './list-all-movies';
import { IMovieRepository } from './movie-repository.interface';

describe('Movie features', () => {
  test('should list all movies', () => {
    const expected = [{ title: 'test', plot: 'a test', genres: ['Test'] }];
    const fakeMovieRepository = {
      findAll: () => expected,
    } as unknown as IMovieRepository;
    const listAllMovies = buildListAllMovies(fakeMovieRepository);
    const obtained = listAllMovies();
    expect(obtained).toBe(expected);
  });
});
