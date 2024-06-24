import { Component, Input, OnInit } from '@angular/core';
import { User, UsersjavaService } from '../service/usersjava.service';

@Component({
  selector: 'app-usersjava',
  templateUrl: './usersjava.component.html',
  styleUrls: ['./usersjava.component.css']
})
export class UsersjavaComponent implements OnInit {
  @Input() users: User[] = [];

  constructor(private usersjavaService: UsersjavaService) {}

  ngOnInit() {
    this.usersjavaService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  isValidPhone(phone: string | null): boolean {
    return this.usersjavaService.isValidPhone(phone);
  }
}
