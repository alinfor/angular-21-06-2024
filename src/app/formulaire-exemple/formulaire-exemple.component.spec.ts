import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireExempleComponent } from './formulaire-exemple.component';

describe('FormulaireExempleComponent', () => {
  let component: FormulaireExempleComponent;
  let fixture: ComponentFixture<FormulaireExempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireExempleComponent]
    });
    fixture = TestBed.createComponent(FormulaireExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
