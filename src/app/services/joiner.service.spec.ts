import { TestBed } from '@angular/core/testing';

import { JoinerService } from './joiner.service';

describe('JoinerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoinerService = TestBed.get(JoinerService);
    expect(service).toBeTruthy();
  });
});
