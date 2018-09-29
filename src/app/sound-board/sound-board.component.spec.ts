import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundBoardComponent } from './sound-board.component';

describe('SoundBoardComponent', () => {
  let component: SoundBoardComponent;
  let fixture: ComponentFixture<SoundBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
