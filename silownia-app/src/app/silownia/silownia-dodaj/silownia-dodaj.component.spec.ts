import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilowniaDodajComponent } from './silownia-dodaj.component';

describe('SilowniaDodajComponent', () => {
  let component: SilowniaDodajComponent;
  let fixture: ComponentFixture<SilowniaDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilowniaDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilowniaDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
