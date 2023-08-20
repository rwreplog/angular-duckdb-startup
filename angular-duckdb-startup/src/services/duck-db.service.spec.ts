import { TestBed } from '@angular/core/testing';

import { DuckDbService } from './duck-db.service';

describe('DuckDbService', () => {
  let service: DuckDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuckDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
