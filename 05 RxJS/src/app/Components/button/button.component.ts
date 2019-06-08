import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../../Services/observable.service';
import { ModeEnum } from '../../Enums/mode.enum';
import { StoreService } from '../../Services/store.service';
import { tap } from 'rxjs/operators';
import { StoreModel } from '../../Models/store-model';
import { Subject } from 'rxjs';

@Component( {
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ]
} )
export class ButtonComponent implements OnInit {
  ModeEnum = ModeEnum;
  storeSubject: Subject<StoreModel>;
  modeSubject: Subject<ModeEnum>;

  mode: ModeEnum;

  constructor( private observableService: ObservableService,
               private storeService: StoreService ) {
  }

  ngOnInit() {
    this.storeSubject = this.storeService.getStoreSubject();
    this.modeSubject = this.observableService.getModeSubject();

    this.storeSubject
      .pipe( tap( model => this.mode = model.mode ) )
      .subscribe();
  }

  setMode( mode: ModeEnum ) {
    this.storeService.setMode( mode );
    this.modeSubject.next(mode);
  }
}
