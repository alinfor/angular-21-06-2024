import { Component } from '@angular/core';
import { User, UsersService } from '../service/users.service';

@Component({
  selector: 'app-apiuserjsonplaceholder',
  templateUrl: './apiuserjsonplaceholder.component.html',
  styleUrls: ['./apiuserjsonplaceholder.component.css']
})
export class ApiuserjsonplaceholderComponent {
  users: User[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(usersList => {
      this.users = usersList;
    });
  }
}
