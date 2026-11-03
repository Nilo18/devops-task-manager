import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksSection } from './tasks-section';

describe('TasksSection', () => {
  let component: TasksSection;
  let fixture: ComponentFixture<TasksSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
