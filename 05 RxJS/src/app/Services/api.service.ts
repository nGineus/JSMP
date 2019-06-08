import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModeEnum } from '../Enums/mode.enum';
import { Observable, of } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class ApiService {
  private readonly apiBase = 'https://jsonplaceholder.typicode.com/';

  constructor( private http: HttpClient ) {
  }

  getData( mode: ModeEnum ): Observable<any> {
    const apiString = this.getApiString( mode );
    return apiString ? this.http.get( apiString ) : of( null );
  }

  private getApiString = ( mode: ModeEnum ) => mode ? `${this.apiBase}${mode}` : ``;
}
