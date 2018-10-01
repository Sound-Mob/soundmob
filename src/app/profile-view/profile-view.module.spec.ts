import { ProfileViewModule } from './profile-view.module';

describe('ProfileViewModule', () => {
  let profileViewModule: ProfileViewModule;

  beforeEach(() => {
    profileViewModule = new ProfileViewModule();
  });

  it('should create an instance', () => {
    expect(profileViewModule).toBeTruthy();
  });
});
