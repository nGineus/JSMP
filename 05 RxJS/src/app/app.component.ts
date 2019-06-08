import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from './Services/api.service';
import { ObservableService } from './Services/observable.service';
import { filter, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { StoreModel } from './Models/store-model';
import { ModeEnum } from './Enums/mode.enum';
import { StoreService } from './Services/store.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent implements OnInit, OnDestroy {
  title = 'Oleksandr Kutsenko JSMP10 homework RxJS';

  storeSubject: BehaviorSubject<StoreModel>;
  currentMode: ModeEnum;

  model: StoreModel;

  constructor( private apiService: ApiService,
               private storeService: StoreService ) {
  }

  ngOnInit(): void {
    this.storeSubject = this.storeService.getStoreSubject();

    this.storeSubject
      .pipe(
        tap( store => this.model = store ),
        filter( store => !!store.mode && this.currentMode !== store.mode ),
        tap( store => this.currentMode = store.mode ),
        switchMap( store => this.apiService.getData( store.mode ) ),
        tap( res => this.storeService.setPayload( res ) ),
        tap( () => this.model = this.storeSubject.getValue() )
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.storeSubject.unsubscribe();
  }

  isEmpty(): boolean {
    return this.model.list.length === 0;
  }

}
