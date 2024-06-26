import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
  }
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  constructor(private http: HttpClient){}
  
  posts:Post[]=[]
  getPost():Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(tap(posts=>this.posts =posts))
  }
}
