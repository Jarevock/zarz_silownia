import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprzetUsunComponent } from './sprzet-usun.component';

describe('SprzetUsunComponent', () => {
  let component: SprzetUsunComponent;
  let fixture: ComponentFixture<SprzetUsunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprzetUsunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprzetUsunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
