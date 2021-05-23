import { buildListAllMovies } from "./list-all-movies";

describe("Movie features", () => {
  test("should list all movies", () => {
    const expected = [{ value: "test" }];
    const fakeMovieRepository = {
      findAll: () => expected,
    };
    const listAllMovies = buildListAllMovies(fakeMovieRepository);
    const obtained = listAllMovies();
    expect(obtained).toBe(expected);
  });
});
