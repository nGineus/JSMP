import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable, Subscription} from "rxjs";
import {debounceTime, takeUntil, tap} from "rxjs/operators";
import {StoreService} from "../../Services/store.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnDestroy {
  nameInput: HTMLInputElement;
  subscription: Observable<any> = new Observable();
  inputSubject: Observable<any>;


  constructor(private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.nameInput = document.getElementById('inputElement') as HTMLInputElement;
    this.inputSubject = this.storeService.getInputSubject();

    fromEvent(this.nameInput, 'keyup')
      .pipe(
        debounceTime(400),
        tap((event) => this.storeService.inputSubject.next(event.target.value))
      )
      .subscribe();

    this.storeService.inputSubject
      .pipe(
        tap((event) => {
          console.log('PING: ', event);
        })
      )
      .subscribe();
    this.storeService.inputSubject.next('INIT');

  }

  ngOnDestroy(): void {
    // this.subscription.next();
    // this.subscription.complete();
  }

}
