import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllComponent } from './observable/all/all.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OffFromComponent } from './observable/off-from/off-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    NavbarComponent,
    AllComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent,
    OffFromComponent,
    ToArrayComponent,
    CustomObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
