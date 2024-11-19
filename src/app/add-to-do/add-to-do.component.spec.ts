import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDOComponent } from './add-to-do.component';

describe('AddToDOComponent', () => {
  let component: AddToDOComponent;
  let fixture: ComponentFixture<AddToDOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToDOComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
