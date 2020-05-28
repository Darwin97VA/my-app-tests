import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorPdfJsComponent } from './lector-pdf-js.component';

describe('LectorPdfJsComponent', () => {
  let component: LectorPdfJsComponent;
  let fixture: ComponentFixture<LectorPdfJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectorPdfJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectorPdfJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
