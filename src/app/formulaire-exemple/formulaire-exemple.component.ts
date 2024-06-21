import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire-exemple',
  templateUrl: './formulaire-exemple.component.html',
  styleUrls: ['./formulaire-exemple.component.css']
})
export class FormulaireExempleComponent {
  credential={
    email:'',
    password:''
  }
  onSubmit(){
    console.log(this.credential)
  }
}
