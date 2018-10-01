import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundplayerComponent } from './soundplayer.component';

describe('SoundplayerComponent', () => {
  let component: SoundplayerComponent;
  let fixture: ComponentFixture<SoundplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
