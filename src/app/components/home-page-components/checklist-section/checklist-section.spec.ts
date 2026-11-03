import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistSection } from './checklist-section';

describe('ChecklistSection', () => {
  let component: ChecklistSection;
  let fixture: ComponentFixture<ChecklistSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
