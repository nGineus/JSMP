import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly apiBase = 'https://jsonplaceholder.typicode.com/';

  constructor() { }

  getData() {

  }
}

