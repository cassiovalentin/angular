
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumoService {

  constructor(private http: HttpClient) { }
  getResumo() {
   return this.http.get(environment.apiUrl + '/resumo');
   }
}
