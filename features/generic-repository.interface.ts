export interface IGenericRepository<T> {
  findAll: () => T[];
}
