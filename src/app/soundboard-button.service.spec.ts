import { TestBed } from '@angular/core/testing';

import { SoundboardButtonService } from './soundboard-button.service';

describe('SoundboardButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoundboardButtonService = TestBed.get(SoundboardButtonService);
    expect(service).toBeTruthy();
  });
});
