import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Batman' },
      { id: 2, name: 'Superman' },
      { id: 3, name: 'Heman' },
      { id: 4, name: 'Flash' },
      { id: 5, name: 'Spiderman' },
      { id: 6, name: 'Wonder Woman' },
      { id: 7, name: 'Captain America' },
      { id: 8, name: 'Black Panthar' },
      { id: 9, name: 'Thor' },
      { id: 10, name: 'Wolvorine' },
    ];
    return {heroes};
  }
}
