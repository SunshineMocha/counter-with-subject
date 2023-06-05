import { Component, OnInit } from '@angular/core';
import { RxjsService } from 'src/app/service/rxjs.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent  implements OnInit{
  constructor(private rxjsServ: RxjsService){}

  ngOnInit(): void{
    // this.rxjsServ.subjectVariable.subscribe({
    //   next: (value: string) => console.log('Subject', value),
    //   error: (err) => console.log(err)
    //   })
    // this.rxjsServ.behaviorVariable.subscribe({
    //   next: (value: string) => console.log('behaviorSubject', value),
    //   error: (err) => console.log(err)
    // })
    // this.rxjsServ.replayVariable.subscribe({
    //   next: (value: string) => console.log('replayVariable', value),
    //   error: (err) => console.log(err)
    // })

    setTimeout(()=> {
      // this.rxjsServ.subjectVariable.subscribe({
      // next: (value: string) => console.log('Subject', value),
      // error: (err) => console.log(err)
      // })

      // this.rxjsServ.behaviorVariable.subscribe({
      //   next: (value: string) => console.log('behaviorSubject', value),
      //   error: (err) => console.log(err)
      // })

      this.rxjsServ.replayVariable.subscribe({
        next: (value: string) => console.log('replayVariable', value),
        error: (err) => console.log(err)
      })
    }, 6000)
  }
}
