import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import { ResourceInput } from '@fullcalendar/resource-common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  resources: ResourceInput[] = [];

  calendarOptions: CalendarOptions = {
    headerToolbar: {},
    initialView: 'resourceTimelineWeek',
    // schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    resources: this.resources,
    nowIndicator: true,
    resourceLabelContent: this.resourceLabelContent.bind(this),
  };

  ngOnInit(): void {

    for (let i = 0; i < 5; i++) {
      this.resources[i] = {
        id: `${i}`,
        title: `Stream ${i}`,
      }
    }
  }

  private resourceLabelContent(arg: any): any {
    return { html: `<b style="color:green">${arg.resource.title}</b>` };
  }

}
