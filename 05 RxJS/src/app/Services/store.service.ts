import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  inputSubject: Subject<string>;
  buttonSubject: Subject<string>;
  apiSubject: Subject<string>;

  constructor() {
    this.inputSubject = new Subject<string>();
    this.buttonSubject = new Subject<string>();
    this.apiSubject = new Subject<string>();
  }

  getInputSubject() {
    return this.apiSubject.asObservable();
  }

  getButtonSubject() {
    return this.buttonSubject.asObservable();
  }

  getApiSubject() {
    return this.apiSubject.asObservable();
  }
}
