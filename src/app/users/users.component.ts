import { Component } from '@angular/core';
import { User, UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(usersList => {
      console.log(usersList)
      this.users = usersList;
    });
  }

}
