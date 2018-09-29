import { TestBed } from '@angular/core/testing';

import { SongSearchService } from './song-search.service';

describe('SongSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SongSearchService = TestBed.get(SongSearchService);
    expect(service).toBeTruthy();
  });
});
