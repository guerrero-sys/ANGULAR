import { Component } from '@angular/core';
import { ApiButtonsComponent } from './components/api-buttons/api-buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ApiButtonsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}


