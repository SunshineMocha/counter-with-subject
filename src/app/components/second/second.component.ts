import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/service/data-service.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, OnDestroy {

  square: Number = 0;

  dataSubscription?: Subscription;

  constructor(public dataServ: DataServiceService){}

  ngOnInit(): void {
    this.dataSubscription = this.dataServ.counter.subscribe({
      next: (value: number)=>{
        this.square = value*value;
      },
      error: err => console.log(err)
    });
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
