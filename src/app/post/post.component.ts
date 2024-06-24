import { Component } from '@angular/core';
import { Post, PostServiceService } from '../service/post-service.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  posts:Post[]=[]
  constructor(private postService:PostServiceService){}
  ngOnInit(): void {

    this.postService.getPost().subscribe(postsList =>{
      this.posts = postsList;
    })
  }
}
