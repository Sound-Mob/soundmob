import { Component, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';
import * as OT from '@opentok/client';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})

export class SubscriberComponent implements AfterViewInit {
  @ViewChild('subscriberDiv') subscriberDiv: ElementRef;
  @Input() session: OT.Session;
  @Input() stream: OT.Stream;

  options: object;

  constructor() { }

  ngAfterViewInit() {
    console.log(this.session, 'subscriber');
    this.options = { width: 10, height: 10, insertMode: 'append' }
    const subscriber = this.session.subscribe(this.stream, this.subscriberDiv.nativeElement, this.options, (err) => {
      if (err) {
        alert(err.message);
      }
    });
  }
}
