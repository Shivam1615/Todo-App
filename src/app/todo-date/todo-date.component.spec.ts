import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDateComponent } from './todo-date.component';

describe('TodoDateComponent', () => {
  let component: TodoDateComponent;
  let fixture: ComponentFixture<TodoDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
