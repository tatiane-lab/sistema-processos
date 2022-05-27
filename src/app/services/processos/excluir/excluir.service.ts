import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExcluirService {
  url = 'http://localhost:3000/process';

  constructor(private http: HttpClient) {}

  excluirProcesso(codigo: number) {
    return this.http.delete(`${this.url}/${codigo}`);
  }
}
