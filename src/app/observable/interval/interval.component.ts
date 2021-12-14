import { Component, OnInit } from '@angular/core';
import{interval, Subscription} from'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  obsMsg: any;
  videoSbscription?:Subscription;
  constructor( private _designutility:DesignUtilityService) { }

  ngOnInit(): void {
    const broadcastinterval=interval(1000);
    this.videoSbscription=broadcastinterval.subscribe(res => {
      console.log(res);
      this.obsMsg = 'video'+res;
      this._designutility.print(this.obsMsg,'elcontainer');
      this._designutility.print(this.obsMsg,'elcontainer2');

      if(res >=5){
        this.videoSbscription?.unsubscribe();
      }
      
    })
  }

}
