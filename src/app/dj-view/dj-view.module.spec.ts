import { DjViewModule } from './dj-view.module';

describe('DjViewModule', () => {
  let djViewModule: DjViewModule;

  beforeEach(() => {
    djViewModule = new DjViewModule();
  });

  it('should create an instance', () => {
    expect(djViewModule).toBeTruthy();
  });
});
