import { Component } from '@angular/core';
import { UserService } from '../user.service';

interface User {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
  mentor: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userList: Array<any> = [];
  editInfo: User[] = [];

  constructor(private userService: UserService) {
    this.userList = this.userService.userList;
  }

  addUser(user: any) {
    this.userService.addUser(user);
  }

  editUser(user: User) {
    this.editInfo.push(user);
  }
}
