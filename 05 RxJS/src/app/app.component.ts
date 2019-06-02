import {Component, OnInit} from '@angular/core';
import {ResultModel} from "./Models/result-model";
import {ApiService} from "./Services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jsmp-rxjs';
  resultModel: ResultModel;

  constructor(apiService: ApiService) {

  }

  ngOnInit(): void {
  }


  onInputChange() {

  }

  onButtonChange() {

  }

}
