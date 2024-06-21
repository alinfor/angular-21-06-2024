import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireExemple4Component } from './formulaire-exemple4.component';

describe('FormulaireExemple4Component', () => {
  let component: FormulaireExemple4Component;
  let fixture: ComponentFixture<FormulaireExemple4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireExemple4Component]
    });
    fixture = TestBed.createComponent(FormulaireExemple4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
