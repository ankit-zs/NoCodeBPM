import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPageOptionComponent } from './edit-page-option.component';

describe('FormEditOPtionComponent', () => {
  let component: EditPageOptionComponent;
  let fixture: ComponentFixture<EditPageOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPageOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPageOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
