import {Injectable} from '@angular/core';


@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'https://studio.cucumber.io/api/projects/469067/scenarios';
  }

  async get<T>(): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.api+json; version=1',
          'access-token': 'ZA0alHzkaXvQkIgL-4h7dA',
          'client': 'pR_l4yBfpKabhH94ktwH9A',
          'uid': 'andreas.steinel@spirit-testing.com'
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data: T = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.error('Fehler bei GET-Anfrage:', error);
      throw error;
    }
  }
}

