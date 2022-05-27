import { TestBed } from '@angular/core/testing';

import { EditarProcessoService } from './editar-processo.service';

describe('EditarProcessoService', () => {
  let service: EditarProcessoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarProcessoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
