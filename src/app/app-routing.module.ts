import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import{FromEventComponent}from'./observable/from-event/from-event.component'
import { IntervalComponent } from './observable/interval/interval.component';
import { OffFromComponent } from './observable/off-from/off-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
const routes: Routes = [
  {path:'observable', component:ObservableComponent,children:[
    {path:'' ,component:ListComponent},
    {path:'from-event',component:FromEventComponent},
    {path:'interval',component:IntervalComponent},
    {path:'off-from',component:OffFromComponent},
    {path:'to-array',component:ToArrayComponent},
    {path:'custom-observable',component:CustomObservableComponent}
  ]},
  {path:'navbar', component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
