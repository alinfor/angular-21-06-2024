import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire-exemple2',
  templateUrl: './formulaire-exemple2.component.html',
  styleUrls: ['./formulaire-exemple2.component.css']
})
export class FormulaireExemple2Component {
  form = new FormGroup({
    email:new FormControl(""),
    password:new FormControl("")
  })
  onSubmit(){
    console.log(this.form.value)
  }
}
