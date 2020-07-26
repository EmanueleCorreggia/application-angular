import { User } from './../classes/User';
import { UserService } from '../services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  //inputs: ['user:user-data']
})
export class UserComponent implements OnInit {
  @Input('user-data') user;
  @Output('onDeleteUser') userDeleted =new EventEmitter();
  @Output() onSelectUser= new EventEmitter ();
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
   deleteUser() {
     //this.userService.deleteUser ì(this.user);
     this.userDeleted.emit(this.user);
   }
   updateUser(){
     this.onSelectUser.emit(this.user);
   }
}
