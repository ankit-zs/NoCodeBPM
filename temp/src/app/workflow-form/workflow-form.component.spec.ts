import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowFormComponent } from './workflow-form.component';

describe('FormComponent', () => {
  let component: WorkflowFormComponent;
  let fixture: ComponentFixture<WorkflowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
