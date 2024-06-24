
import { Component, OnInit } from '@angular/core';
import { User, UsersjavaService } from '../service/usersjava.service';

@Component({
  selector: 'app-apiuserjava',
  templateUrl: './apiuserjava.component.html',
  styleUrls: ['./apiuserjava.component.css']
})
export class ApiuserjavaComponent implements OnInit {

  users: User[] = [];

  constructor(private userjavaService: UsersjavaService ) {}

  ngOnInit(): void {
    this.userjavaService.getAllUsers().subscribe(usersList => {
      this.users = usersList;
    });
  }
  isValidPhone(phone: string | null): boolean {
    return this.userjavaService.isValidPhone(phone);
  }
}
