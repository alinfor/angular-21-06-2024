import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulaire-exemple4',
  templateUrl: './formulaire-exemple4.component.html',
  styleUrls: ['./formulaire-exemple4.component.css']
})
export class FormulaireExemple4Component {
  @ViewChild('form') form !: NgForm;
 
  credential ={
    firstname:"",
    lastname:"",
    email:"",
    password:""
  }

    onSubmit(e:{}){
    if (this.form.invalid ||this.passwordValide(this.credential.password)) {
      return;
    }
    console.log(e)
  }
  passwordregex:RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  
  passwordValide(password:string): boolean{
    return this.passwordregex.test(password);
  }
}
