import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtReactiveFormsComponent } from './dt-reactive-forms.component';

describe('DtReactiveFormsComponent', () => {
  let component: DtReactiveFormsComponent;
  let fixture: ComponentFixture<DtReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtReactiveFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
