import { Injectable } from '@angular/core';
import { Log } from '../models/log';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';

@Injectable()
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});

  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() { 
    // this.logs = [
    //   {id: '1', text: "Generated Component", date: new Date('12/12/201 12:12:12')},
    //   {id: '2', text: "Add Bootstrap", date: new Date('12/19/201 12:19:12')},
    //   {id: '3', text: "Added logs component", date: new Date('12/22/201 12:42:12')},
    // ]
    this.logs = [];
  }

  getLogs(): Observable<Log[]> {
    if(localStorage.getItem('logs') === null){
      this.logs =[];
    }else{
      this.logs = JSON.parse(localStorage.getItem('logs'));
    }
    return of(this.logs.sort((a,b)=>{
      return b.date= a.date;
    }));
  }

  setFormLog(log: Log){
    this.logSource.next(log);
  }

  addLog(log: Log){
    this.logs.unshift(log);

    //add to local storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  updateLog(log: Log){
    this.logs.forEach((cur, index)=>{
      if(log.id === cur.id){
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);

    //update
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  deleteLog(log: Log){
    this.logs.forEach((cur, index)=>{
      if(log.id === cur.id){
        this.logs.splice(index, 1);
      }
    });
    //Delete from local storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  clearState(){
    this.stateSource.next(true);
  }

}
