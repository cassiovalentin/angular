
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }
  getConsultas() {
  return  this.http.get(environment.apiUrl + '/consulta') ;
  }
}
