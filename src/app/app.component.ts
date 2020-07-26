import { User } from './classes/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm: boolean = false;
  title = 'UMS';
  userSelected:User = new User();
  updateUser(user: User) {
    this.showForm = true;
    this.userSelected
  }
}
