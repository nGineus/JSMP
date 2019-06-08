import { Injectable } from '@angular/core';
import { StoreModel } from '../Models/store-model';
import { tap } from 'rxjs/operators';
import { ModeEnum } from '../Enums/mode.enum';
import { BehaviorSubject } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class StoreService {
  private model: StoreModel;
  private storeSubject: BehaviorSubject<StoreModel>;

  constructor() {
    this.model = new StoreModel();
    this.storeSubject = new BehaviorSubject( this.model );

    this.storeSubject
      .pipe( tap( model => this.model = model ) )
      .subscribe();
  }

  getStoreSubject() {
    return this.storeSubject;
  }

  setMode( mode: ModeEnum ) {
    if ( this.model.changeMode( mode ) ) {
      this.storeSubject.next( this.model );
    }
  }

  changeFilter( filter: string ) {
    if ( this.model.changeFilter( +filter ) ) {
      this.storeSubject.next( this.model );
    }
  }

  setPayload( dto: any ) {
    this.model.setPayload( dto );
    this.storeSubject.next( this.model );
  }

}
