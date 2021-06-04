import { MovieRepository } from './movie.repository';

describe('Movie repository', () => {
  test('should return list of movies (mocked)', async () => {
    const expected = [{ title: 'test', plot: 'a test', genres: ['Test'] }];
    const repository = new MovieRepository();
    const obtained = await repository.findAll();

    expect(obtained).toEqual(expected);
  });
});
