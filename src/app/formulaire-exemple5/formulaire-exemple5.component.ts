import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-exemple5',
  templateUrl: './formulaire-exemple5.component.html',
  styleUrls: ['./formulaire-exemple5.component.css']
})
export class FormulaireExemple5Component {
  form = new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)])
  })

  get email(){return this.form.get('email')}
  onSubmit(){
    console.log(this.form.value)
  }
}
