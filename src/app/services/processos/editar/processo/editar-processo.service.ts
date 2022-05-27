import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditarProcessoService {
  url = 'http://localhost:3000/process';

  constructor(private http: HttpClient) {}

  editarProcesso(reu: any) {
    return this.http.put(`${this.url}/${reu.id}`, reu);
  }
}
