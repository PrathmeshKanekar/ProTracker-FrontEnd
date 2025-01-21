import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDivMasterComponent } from './class-div-master.component';

describe('ClassDivMasterComponent', () => {
  let component: ClassDivMasterComponent;
  let fixture: ComponentFixture<ClassDivMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassDivMasterComponent]
    });
    fixture = TestBed.createComponent(ClassDivMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
