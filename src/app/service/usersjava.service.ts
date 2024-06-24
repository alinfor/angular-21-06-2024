import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
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

@Injectable({
  providedIn: 'root'
})
export class UsersjavaService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8081/ecolis-ws/users");
  }

  isValidPhone(phone: string | null): boolean {
    if (!phone) {
      return false;
    }
    const phoneRegex = /^[0-9]{9,10}$/;
    return phoneRegex.test(phone);
  }
}
