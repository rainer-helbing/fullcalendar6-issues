import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { AppComponent } from './app.component';

FullCalendarModule.registerPlugins([
  resourceTimelinePlugin
])

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule // import the FullCalendar module! will make the FullCalendar component available
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
