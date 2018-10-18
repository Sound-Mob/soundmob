import { TestBed } from '@angular/core/testing';

import { NeedAuthGuardService } from './need-auth-guard.service';

describe('NeedAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeedAuthGuardService = TestBed.get(NeedAuthGuardService);
    expect(service).toBeTruthy();
  });
});
