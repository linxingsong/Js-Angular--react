import { Injectable } from '@angular/core';

import { User } from "../components/models/User";

@Injectable()
export class DataService {
  users: User[];
  
  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Tempa',
        email:'john@gmail.com',
        isActive: true,
        registered: new Date('01/01/2017 12:07:54'),
        hide: true
      },
      {
        firstName: 'Eric',
        lastName: 'Tlie',
        email: 'eric@yahoo.com',
        isActive: false,
        registered: new Date('11/02/2017 19:27:54'),
        hide: true
      }
    ];
  }

  getUsers(): User[]{
    console.log('Fetching users from service...');
    return this.users;
  }

  addUser(user: User){
    this.users.unshift(user);
  }

}
