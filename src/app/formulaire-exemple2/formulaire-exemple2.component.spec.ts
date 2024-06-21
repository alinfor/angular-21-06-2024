import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireExemple2Component } from './formulaire-exemple2.component';

describe('FormulaireExemple2Component', () => {
  let component: FormulaireExemple2Component;
  let fixture: ComponentFixture<FormulaireExemple2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireExemple2Component]
    });
    fixture = TestBed.createComponent(FormulaireExemple2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
