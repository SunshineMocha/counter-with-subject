import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {
  isEven?: boolean = true;

  constructor(public dataServ: DataServiceService){}

  ngOnInit(): void {
      this.dataServ.counter.subscribe({
        next: (value:number) => {
          const square = value*value;
          if (square % 2 === 0) {
            this.isEven = true;
          }else{
            this.isEven=false;
          }
        }
      })
  }

}
