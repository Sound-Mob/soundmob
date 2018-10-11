import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerChatComponent } from './listener-chat.component';

describe('ListenerChatComponent', () => {
  let component: ListenerChatComponent;
  let fixture: ComponentFixture<ListenerChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
