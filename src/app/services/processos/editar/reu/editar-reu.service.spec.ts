import { TestBed } from '@angular/core/testing';

import { EditarReuService } from './editar-reu.service';

describe('EditarReuService', () => {
  let service: EditarReuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarReuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
