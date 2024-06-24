import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  @Input() value : number=0;

  handleButtonClick(action: string) {
    if (action === 'increase') {
      this.value++;
    } else if (action === 'decrease') {
      this.value--;
    }
  }

}
