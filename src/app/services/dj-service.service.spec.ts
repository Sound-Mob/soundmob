import { TestBed } from '@angular/core/testing';

import { DjServiceService } from './dj-service.service';

describe('DjServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DjServiceService = TestBed.get(DjServiceService);
    expect(service).toBeTruthy();
  });
});
