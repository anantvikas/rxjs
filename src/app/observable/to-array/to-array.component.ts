import { Component, OnInit } from '@angular/core';
import { interval, of, Subscription } from 'rxjs';
import { toArray, take } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
 sub:Subscription | undefined
  constructor( private _designutility:DesignUtilityService) { }

  ngOnInit(): void {
    //ex-1
  //   const valuecollector=interval(1000);
  //  this.sub= valuecollector.pipe(
  //    take(5),
  //    toArray()
  //  ).subscribe(res => {
  //     console.log(res)
  //   })


  // ex-2
  const arr=of('hello','every','one','how','are','you');
  arr.subscribe(res => {
    console.log(res);
    this._designutility.print(res,'elcontainer')
  })
  //ex-3
  const arr1=of('hello','every','one','how','are','you');
  arr1.pipe(take(6),toArray()).subscribe(res => {
    console.log(res);
    this._designutility.print(res,'elcontainer2')
  })

  }

}
