import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPageContentOptionComponent } from './edit-page-content-option.component';

describe('EditPageContentOptionComponent', () => {
  let component: EditPageContentOptionComponent;
  let fixture: ComponentFixture<EditPageContentOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPageContentOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPageContentOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
