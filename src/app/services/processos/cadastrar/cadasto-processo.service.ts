import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CadastoProcessoService {
  url = 'http://localhost:3000/process';

  constructor(private http: HttpClient) {}

  cadastrarProcesso(processo: any) {
    return this.http.post(this.url, processo);
  }
}
