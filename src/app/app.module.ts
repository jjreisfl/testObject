import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Object2arrayPipe } from './pipes/object2array.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Object2arrayPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
