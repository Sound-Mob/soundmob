import { UserViewModule } from './user-view.module';

describe('UserViewModule', () => {
  let userViewModule: UserViewModule;

  beforeEach(() => {
    userViewModule = new UserViewModule();
  });

  it('should create an instance', () => {
    expect(userViewModule).toBeTruthy();
  });
});
