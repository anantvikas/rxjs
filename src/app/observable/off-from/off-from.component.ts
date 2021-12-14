import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-off-from',
  templateUrl: './off-from.component.html',
  styleUrls: ['./off-from.component.scss']
})
export class OffFromComponent implements OnInit {
  obmsg:any;
  constructor( private _designutility:DesignUtilityService) { }

  ngOnInit(): void {
//of 
 const obs1=of('Anant','Vikas','Singh');
 obs1.subscribe(res => {
   console.log(res);
   this._designutility.print(res,'elcontainer')
 })
 const obs2=of({a:'Ram',b:'Shyam',c:'Seeta'});
 obs2.subscribe(res => {
   this.obmsg=res;
   console.log("obmsg=>",res);
  //  this._designutility.print(res,'elcontainer')
 })
 const obs3=from(["events"," argument","sequence"]);
 obs3.subscribe(res => {
   
   console.log(res);
   this._designutility.print(res,'elcontainer3')
 })

  }

}
