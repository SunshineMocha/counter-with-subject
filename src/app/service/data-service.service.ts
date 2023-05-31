import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public counterValueSubject: BehaviorSubject<number> = new BehaviorSubject(0)

  constructor() { }

  increment(){
    const counterValues = this.counterValueSubject.value;
    const newValue = counterValues + 1;

    this.counterValueSubject.next(newValue);
  }

  decrement(){
    const counterValues = this.counterValueSubject.value;
    const newValue = counterValues - 1;

    this.counterValueSubject.next(newValue);
  }
}
