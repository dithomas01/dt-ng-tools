import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtNgToolsLibComponent } from './dt-ng-tools-lib.component';

describe('DtNgToolsLibComponent', () => {
  let component: DtNgToolsLibComponent;
  let fixture: ComponentFixture<DtNgToolsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtNgToolsLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtNgToolsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
