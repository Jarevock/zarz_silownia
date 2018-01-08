import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlientUsunComponent } from './klient-usun.component';

describe('KlientUsunComponent', () => {
  let component: KlientUsunComponent;
  let fixture: ComponentFixture<KlientUsunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlientUsunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlientUsunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
