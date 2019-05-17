import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   Root_Url = "https://jsonplaceholder.typicode.com";

  constructor( private _httpClient: HttpClient ) { }
 // get all posts data 
  getPosts(){
    return this._httpClient.get<Post[]>(`${this.Root_Url}/posts`);
  }
 // add new post and return new added post
  addPost(data){
    return this._httpClient.post<Post>(`${this.Root_Url}/posts`, data);
  }

 // update an existing post
 updatePost(data){
   return this._httpClient.put<Post>(`${this.Root_Url}/posts/1`, data);
 }

 // update an existing post
 deletePost(){
  return this._httpClient.delete<Post>(`${this.Root_Url}/posts/1`);
}
}
