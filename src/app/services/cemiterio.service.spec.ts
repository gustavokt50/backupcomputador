import { TestBed } from '@angular/core/testing';

import { CemiterioService } from './cemiterio.service';

describe('CemiterioService', () => {
  let service: CemiterioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CemiterioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
