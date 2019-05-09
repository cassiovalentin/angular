import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FaturamentoService {

  constructor(private http: HttpClient) { }
  getFaturamento() {
   return this.http.get(environment.apiUrl + 'faturamento');
  }
}
