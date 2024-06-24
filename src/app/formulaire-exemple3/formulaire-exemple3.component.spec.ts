import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireExemple3Component } from './formulaire-exemple3.component';

describe('FormulaireExemple3Component', () => {
  let component: FormulaireExemple3Component;
  let fixture: ComponentFixture<FormulaireExemple3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireExemple3Component]
    });
    fixture = TestBed.createComponent(FormulaireExemple3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
