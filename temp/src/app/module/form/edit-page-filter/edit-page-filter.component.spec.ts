import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPageFilterComponent } from './edit-page-filter.component';

describe('EditPageFilterComponent', () => {
  let component: EditPageFilterComponent;
  let fixture: ComponentFixture<EditPageFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPageFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPageFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
