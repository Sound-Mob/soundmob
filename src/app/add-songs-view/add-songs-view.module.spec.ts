import { AddSongsViewModule } from './add-songs-view.module';

describe('AddSongsViewModule', () => {
  let addSongsViewModule: AddSongsViewModule;

  beforeEach(() => {
    addSongsViewModule = new AddSongsViewModule();
  });

  it('should create an instance', () => {
    expect(addSongsViewModule).toBeTruthy();
  });
});
