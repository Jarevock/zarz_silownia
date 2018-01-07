import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlientDodajComponent } from './klient-dodaj.component';

describe('KlientDodajComponent', () => {
  let component: KlientDodajComponent;
  let fixture: ComponentFixture<KlientDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlientDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlientDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
