import { TestBed } from '@angular/core/testing';

import { ProfileHeaderService } from './profile-header.service';

describe('ProfileHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileHeaderService = TestBed.get(ProfileHeaderService);
    expect(service).toBeTruthy();
  });
});
