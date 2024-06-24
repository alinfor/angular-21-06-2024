import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireExemple5Component } from './formulaire-exemple5.component';

describe('FormulaireExemple5Component', () => {
  let component: FormulaireExemple5Component;
  let fixture: ComponentFixture<FormulaireExemple5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireExemple5Component]
    });
    fixture = TestBed.createComponent(FormulaireExemple5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
