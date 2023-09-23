import { TestBed } from '@angular/core/testing';

import { RestriccionEstadoService } from '../state/restriccion-estado.service';

describe('RestriccionEstadoService', () => {
  let service: RestriccionEstadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestriccionEstadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
