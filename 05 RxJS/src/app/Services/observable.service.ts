import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModeEnum } from '../Enums/mode.enum';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  inputSubject: Subject<string>;
  modeSubject: Subject<ModeEnum>;

  constructor() {
    this.inputSubject = new Subject();
    this.modeSubject = new Subject();
  }

  getInputSubject() {
    return this.inputSubject;
  }

  getModeSubject() {
    return this.modeSubject;
  }
}
