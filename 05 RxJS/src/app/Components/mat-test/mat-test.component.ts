import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material";

@Component({
  selector: 'app-mat-test',
  templateUrl: './mat-test.component.html',
  styleUrls: ['./mat-test.component.scss']
})
export class MatTestComponent implements OnInit, AfterViewInit {
  @ViewChild('matMenuTrigger', { static: false }) matMenuTrigger: MatMenuTrigger;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // setInterval(() => {
    //   this.matMenuTrigger.toggleMenu();
    //   console.log('Toggle...');
    // }, 5000);
  }

}
