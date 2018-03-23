import { Injectable } from '@angular/core';

import { User } from "../components/models/User";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;
  
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

  getData(){
    this.data = new Observable( observer => {
      setTimeout(()=>{
        observer.next(1);
      }, 1000);
      setTimeout(()=>{
        observer.next(2);
      }, 2000);
      setTimeout(()=>{
        observer.next(3);
      }, 3000);
      setTimeout(()=>{
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]>{
    return of(this.users);
  }

  addUser(user: User){
    this.users.unshift(user);
  }

}
