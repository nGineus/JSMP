import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MatTestComponent} from './mat-test.component';
import {MatMenuModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DebugElement} from "@angular/core";

fdescribe('MatTestComponent', () => {
  let component: MatTestComponent;
  let fixture: ComponentFixture<MatTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule, BrowserAnimationsModule],
      declarations: [MatTestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const compiledDom = fixture.nativeElement;

    expect(component).toBeTruthy();
    setInterval(() => {
      // component.matMenuTrigger.toggleMenu();
      compiledDom.querySelector('button').click();
      fixture.detectChanges();
    }, 1000);
    // expect(fixture.debugElement.queryAll(By.css('.menu-item')).length).toEqual(2);
  });
});
