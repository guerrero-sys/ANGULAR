/*import { Component } from '@angular/core';

@Component({
  selector: 'app-api-buttons',
  standalone: true,
  imports: [],
  templateUrl: './api-buttons.component.html',
  styleUrl: './api-buttons.component.css'
})
export class ApiButtonsComponent {

} */

import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-buttons',
  standalone: true,
  templateUrl: './api-buttons.component.html',
  styleUrls: ['./api-buttons.component.css']
})
export class ApiButtonsComponent {
  constructor(private apiService: ApiService) {}

  onGet() {
    this.apiService.getPosts().subscribe(res => console.log(res));
  }

  onPost() {
  this.apiService.createPost().subscribe(res => console.log(res));
}

onPut() {
  this.apiService.updatePost().subscribe(res => console.log(res));
}

onDelete() {
  this.apiService.deletePost().subscribe(res => console.log(res));
}
}



