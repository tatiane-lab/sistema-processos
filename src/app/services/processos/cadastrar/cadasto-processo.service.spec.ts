import { TestBed } from '@angular/core/testing';

import { CadastoProcessoService } from './cadasto-processo.service';

describe('CadastoProcessoService', () => {
  let service: CadastoProcessoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastoProcessoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
