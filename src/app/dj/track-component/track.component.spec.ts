import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackComponentComponent } from './track.component';

describe('TrackComponentComponent', () => {
  let component: TrackComponentComponent;
  let fixture: ComponentFixture<TrackComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
