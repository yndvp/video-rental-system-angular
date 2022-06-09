import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 12, name: '1917' },
      { id: 13, name: 'Gravity' },
      { id: 14, name: 'Harry Potter' },
      { id: 15, name: 'Hereditary' },
      { id: 16, name: 'Inception' },
      { id: 17, name: 'Greenland' },
      { id: 18, name: 'Parasite' },
      { id: 19, name: 'La La Land' },
      { id: 20, name: 'Flight' },
    ];
    return { movies };
  }

  genId(movies: Movie[]): number {
    return movies.length > 0
      ? Math.max(...movies.map((movie) => movie.id)) + 1
      : 11;
  }
}
