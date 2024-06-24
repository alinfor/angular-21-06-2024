import { Component, Input } from '@angular/core';
import { User } from '../service/users.service';

@Component({
  selector: 'app-usersjsonplaceholder',
  templateUrl: './usersjsonplaceholder.component.html',
  styleUrls: ['./usersjsonplaceholder.component.css']
})
export class UsersjsonplaceholderComponent {
  @Input() users:User[]=[]
}
