import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-formulaire-exemple3',
  templateUrl: './formulaire-exemple3.component.html',
  styleUrls: ['./formulaire-exemple3.component.css']
})
export class FormulaireExemple3Component {
@ViewChild('form') form !: NgForm;
 
  credential ={
    email:'',
    password:''
  }

    onSubmit(e:{}){
    if (this.form.invalid) {
      return;
    }
    console.log(e)
  }

}
