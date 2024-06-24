import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output () buttonClick = new EventEmitter<string>();
  @Input () action:string = ''
  @Input () label: string = '';
  
  handleClick() {
    this.buttonClick.emit(this.action)
  }

}
