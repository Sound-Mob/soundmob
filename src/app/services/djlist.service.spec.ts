import { TestBed } from '@angular/core/testing';

import { DjlistService } from './djlist.service';

describe('DjlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DjlistService = TestBed.get(DjlistService);
    expect(service).toBeTruthy();
  });
});
