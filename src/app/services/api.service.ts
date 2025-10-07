//https://jsonplaceholder.typicode.com/

/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
} */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createPost(): Observable<any> {
    const newPost = { title: 'Nuevo Post', body: 'Contenido de ejemplo', userId: 1 };
    return this.http.post(this.baseUrl, newPost);
  }

  updatePost(): Observable<any> {
    const updatedPost = { title: 'Post Actualizado', body: 'Nuevo contenido', userId: 1 };
    return this.http.put(`${this.baseUrl}/1`, updatedPost);
  }

  deletePost(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/1`);
  }
}




