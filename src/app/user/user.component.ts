import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersComponent]
})
export class UserComponent {
  user: any | undefined = {};

  constructor(private activeRoute: ActivatedRoute) { 
    console.log(activeRoute.snapshot.params)
  }
}
