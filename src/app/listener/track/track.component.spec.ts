import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerTrackComponent } from './track.component';

describe('TrackComponent', () => {
  let component: ListenerTrackComponent;
  let fixture: ComponentFixture<TrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
