import { TestBed } from '@angular/core/testing';

import { SoundBoardService } from './sound-board.service';

describe('SoundBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoundBoardService = TestBed.get(SoundBoardService);
    expect(service).toBeTruthy();
  });
});
