import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundboardButtonComponent } from './soundboard-button.component';

describe('SoundboardButtonComponent', () => {
  let component: SoundboardButtonComponent;
  let fixture: ComponentFixture<SoundboardButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundboardButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundboardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
