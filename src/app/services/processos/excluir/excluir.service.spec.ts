import { TestBed } from '@angular/core/testing';

import { ExcluirService } from './excluir.service';

describe('ExcluirService', () => {
  let service: ExcluirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcluirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
