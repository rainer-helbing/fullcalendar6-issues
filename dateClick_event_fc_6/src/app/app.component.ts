import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { ResourceInput } from '@fullcalendar/resource';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  resources: ResourceInput[] = [];
  events: EventInput[] = [];

  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, resourceTimelinePlugin],
    headerToolbar: {},
    initialView: 'resourceTimelineWeek',
    // schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    events: this.events,
    resources: this.resources,
    nowIndicator: true,
    dateClick: this.calendarDateClicked.bind(this),
  };

  ngOnInit(): void {

    for (let i = 0; i < 5; i++) {
      this.resources[i] = {
        id: `${i}`,
        title: `Stream ${i}`,
      }
    }

    let start = new Date();
    let end = new Date(start.getTime() + 3 * 3600 * 1000);
    this.events.push({
      id: "e1",
      resourceId: "2",
      start: start,
      end: end
    });
  }

  private calendarDateClicked(arg: DateClickArg) {
    if (arg.jsEvent.target) {
      // let anyTarget: any = arg.jsEvent.target;
      // let ex = anyTarget.eventListeners && anyTarget.eventListeners("dblclick").length !== 0
      console.log("Date click", arg.date, "resource=" + arg.resource?.id, "detail=" + arg.jsEvent.detail.toString());
      // if (!ex) {
      //   arg.jsEvent.target.addEventListener("dblclick", () => {
      //     console.warn("Date doubleclick", arg.date, "resource=" + arg.resource?.id);
      //   });
      // }
    }
  }

}
