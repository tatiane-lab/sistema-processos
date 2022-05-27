import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  url = 'http://localhost:3000/process';

  constructor(private http: HttpClient) {}

  buscarTodosProcessos() {
    return this.http.get(this.url);
  }

  buscarPorCodigoProcessos(codigo: any) {
    return this.http.get(`${this.url}?codeProcess=${codigo}`);
  }
}
