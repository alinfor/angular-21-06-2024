import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface User {
  civility: string;            
  name: string;              
  login: string;            
  password: string;          
  email: string;             
  enabled: boolean;          
  lastConnection: number;    
  yearOfBirth: number;       
  phone: string | null;      
  registrationDate: Date;  
  id: number;                
}

@Component({
  selector: 'app-apiuserjava',
  templateUrl: './apiuserjava.component.html',
  styleUrls: ['./apiuserjava.component.css']
})
export class ApiuserjavaComponent implements OnInit {
  users: User[] = [];

  constructor(private http:HttpClient){}
  ngOnInit() {
    this.getAllUsers().subscribe(users => {
      console.log("a")
      this.users = users;
    }, error => {
      console.log("amo")
      console.error('Error fetching users', error);
    });
  }

  getAllUsers(): Observable<User[]> {

    return this.http.get<User[]>("http://localhost:8081/ecolis-ws/users");
  }
  isValidPhone(phone: string | null): boolean {
    if (!phone ) {
      return false
    }
    const phoneRegex = /^[0-9]{9,10}$/;
    return phoneRegex.test(phone);
}
}


