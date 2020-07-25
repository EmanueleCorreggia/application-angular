import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector : 'app-users',
  templateUrl: './users.component.html',
  styleUrls : ['./users.component.css']
})

export  class UsersComponent implements OnInit{
  title = 'Users';
  users = [];
  constructor(private userService: UserService) {


  }
  ngOnInit(){
    this.users = this.userService.getUsers();
        
  }
  onDeleteUser(user){
    this.userService.deletUser(user);
  }
}
