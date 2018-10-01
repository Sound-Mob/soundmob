import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSongsComponent } from './add-songs.component';

describe('AddSongsComponent', () => {
  let component: AddSongsComponent;
  let fixture: ComponentFixture<AddSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
