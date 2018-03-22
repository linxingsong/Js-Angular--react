import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Tempa',
        age: 25,
        address: {
          street: '50 Main St',
          city: 'New York',
          state: 'NY'
        },
        isActive: true,
        registered: new Date('01/01/2017 12:07:54'),
        hide: true
      },
      {
        firstName: 'Eric',
        lastName: 'Tlie',
        age: 45,
        address: {
          street: '13 Madin St',
          city: 'New York',
          state: 'NY'
        },
        isActive: false,
        registered: new Date('11/02/2017 19:27:54'),
        hide: true
      }
    ];
    this.loaded = true;

    //this.showExtended = false;

  }

  addUser(user: User) {
    this.users.push(user);
  }

  // setCurrentClasses(){
  //  this.currentClasses = {
  //    'btn-success': this.enableAdd,
  //    'big-text': this.showExtended
  //  }
  // }

  // setCurrentStyles(){
  //   this.currentStyles = {
  //     'padding-top': this.showExtended ? '0' : '40px',
  //     'font-size': this.showExtended ? '' : '40px'
  //   }
  // }

  // toggleHide(user: User){
  //   user.hide = !user.hide;
  // }

}
