import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }
  print(val:any,Idcontainer: string){
    let el=document.createElement('li');
    el.innerText=val;
    document.getElementById(Idcontainer)?.appendChild(el)
  }
  


}
