import { TestBed } from '@angular/core/testing';

import { DjProfileService } from './dj-profile.service';

describe('DjProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DjProfileService = TestBed.get(DjProfileService);
    expect(service).toBeTruthy();
  });
});
