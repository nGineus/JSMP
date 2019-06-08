import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from '../../Models/post-model';
import { ModeEnum } from '../../Enums/mode.enum';

@Component( {
  selector: 'app-presenter',
  templateUrl: './presenter.component.html',
  styleUrls: [ './presenter.component.scss' ]
} )
export class PresenterComponent implements OnInit {
  @Input() mode: ModeEnum;
  @Input() model: PostModel;

  ModeEnum = ModeEnum;

  ngOnInit() {
  }

}
