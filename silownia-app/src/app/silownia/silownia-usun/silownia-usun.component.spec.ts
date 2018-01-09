import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilowniaUsunComponent } from './silownia-usun.component';

describe('SilowniaUsunComponent', () => {
  let component: SilowniaUsunComponent;
  let fixture: ComponentFixture<SilowniaUsunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilowniaUsunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilowniaUsunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
