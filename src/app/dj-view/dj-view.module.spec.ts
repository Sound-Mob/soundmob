import { DJViewModule } from './dj-view.module';

describe('DJViewModule', () => {
  let dJViewModule: DJViewModule;

  beforeEach(() => {
    dJViewModule = new DJViewModule();
  });

  it('should create an instance', () => {
    expect(dJViewModule).toBeTruthy();
  });
});
