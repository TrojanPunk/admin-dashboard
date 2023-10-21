import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList = [
    {
      id : 1,
      name : "Chester",
      startDate: "01/01/2023",
      endDate: "01/05/2023",
      status: "Completed",
      mentor: "Chris Cornell"
    },
    {
      id : 2,
      name : "Mike",
      startDate: "01/01/2023",
      endDate: "01/05/2023",
      status: "Cancelled",
      mentor: "Chris Cornell"
    },
    {
      id : 3,
      name : "Rob",
      startDate: "01/01/2023",
      endDate: "01/05/2023",
      status: "Completed",
      mentor: "Chris Cornell"
    },
    {
      id : 4,
      name : "Dave",
      startDate: "01/01/2023",
      endDate: "01/05/2023",
      status: "In Progress",
      mentor: "Chris Cornell"
    },
    {
      id : 5,
      name : "Joe",
      startDate: "01/01/2023",
      endDate: "01/05/2023",
      status: "Completed",
      mentor: "Chris Cornell"
    },
    {
      id : 6,
      name : "Brad",
      startDate: "01/01/2023",
      endDate: "01/05/2023",
      status: "In Progress",
      mentor: "Chris Cornell"
    },
  ]

  constructor() { }

  addUser(user: any) {
    this.userList.push(user);
  }
}
