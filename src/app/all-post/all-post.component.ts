import { Component, OnInit, inject } from '@angular/core';
import { Post } from '../core/models/post.model';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
  allPost: Post[] = [];
  message: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(data => {
      this.allPost = data;
    });
  }

  getData() {
    this.dataService.getPosts().subscribe(data => {
      this.allPost = data;
    }, err => this.message = err);
  }

  addNewPost() {
    let newPost: Post = {
      id: 1,
      userId: 5,
      body: 'This is new post content',
      title: 'new Post title'
    }
    this.dataService.addPost(newPost).subscribe(data => {
      this.allPost.push(data);
    }, err => this.message = err);
  }

  updateSinglePost() {
    let newPost: Post = {
      id: 1,
      userId: 1,
      body: 'This is new post content',
      title: 'new Post title'
    }
    this.dataService.updatePost(newPost).subscribe(data => {
      this.allPost.push(data);
    }, err => this.message = err);
  }

  deleteSinglePost() {
    this.dataService.deletePost().subscribe(data => {
       }, err => this.message = err);
  }
}
