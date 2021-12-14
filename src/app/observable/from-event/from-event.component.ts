import { Component, ElementRef, OnInit,ViewChild , AfterViewInit} from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';


@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  buttonSubscription: any;
  

  constructor( private _designutility:DesignUtilityService) {}
  @ViewChild('add', { static: true }) button?:ElementRef;
  ngAfterViewInit(): void {
    let count=1;
    
    fromEvent(this.button?.nativeElement, 'click')
    .subscribe(res =>{ 
      let countVal='video'+count++;
      console.log(countVal);
      this._designutility.print(countVal,'elcontainer');
      // this.print(countVal);

  });
    
    
  }
 

  

  ngOnInit(): void {
   
  }
  
  
}
  

 



function elcontainer(countVal: string, elcontainer: any) {
  throw new Error('Function not implemented.');
}

