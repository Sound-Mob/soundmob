import { TestBed } from '@angular/core/testing';

import { AddSongsServiceService } from './add-songs-service.service';

describe('AddSongsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddSongsServiceService = TestBed.get(AddSongsServiceService);
    expect(service).toBeTruthy();
  });
});
