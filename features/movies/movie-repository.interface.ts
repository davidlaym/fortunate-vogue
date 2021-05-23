import { IGenericRepository } from "../generic-repository.interface";
import { Movie } from "entities";

export interface MovieRepository extends IGenericRepository<Movie> {}
