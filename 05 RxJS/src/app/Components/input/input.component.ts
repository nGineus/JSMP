import {Component, OnDestroy, OnInit} from '@angular/core';
import { fromEvent, Subject, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged, tap } from "rxjs/operators";
import {ObservableService} from "../../Services/observable.service";
import { StoreService } from '../../Services/store.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnDestroy {
  nameInput: HTMLElement;
  subscription: Subscription;
  inputSubject: Subject<string>;

  constructor(private observableService: ObservableService,
              private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.nameInput = document.getElementById( 'inputElement' ) as HTMLElement;
    this.inputSubject = this.observableService.getInputSubject();

    this.subscription = fromEvent( this.nameInput, 'keyup' )
      .pipe(
        debounceTime( 1000 ),
        distinctUntilChanged(),
        tap(filter => this.storeService.changeFilter(( filter as any ).target.value))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
