import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraAppComponent } from './bitacora-app.component';

describe('BitacoraAppComponent', () => {
  let component: BitacoraAppComponent;
  let fixture: ComponentFixture<BitacoraAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitacoraAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitacoraAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
