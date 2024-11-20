import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts() {
    let url = `${this.API_URL}/posts`;
    return this.http.get(url);
  }

  getPostsById(id: string) {
    let url = `${this.API_URL}/posts/${id}`;
    return this.http.get(url);
  }

  // addPosts(post: any) {
  //   let url = `${this.API_URL}/posts`;
  //   return this.http.post(url, post);
  // }

  // updatePosts(id: string, post: any) {
  //   let url = `${this.API_URL}/posts/${id}`;
  //   return this.http.patch(url, post);
  // }

  // deletePosts(id: string) {
  //   let url = `${this.API_URL}/posts/${id}`;
  //   return this.http.delete(url);
  // }
}
