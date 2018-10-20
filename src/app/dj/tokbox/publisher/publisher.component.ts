import { Component, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';
import { OpentokService } from '../../../services/opentok.service';

const publish = () => {

};

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})

export class PublisherComponent implements AfterViewInit {

  @ViewChild('publisherDiv') publisherDiv: ElementRef;
  @Input() session: OT.Session;
  publisher: OT.Publisher;
  publishing: Boolean;
  publishOptions: Object;

  constructor(private opentokService: OpentokService) {
    this.publishing = false;
  }

  ngAfterViewInit() {
    const OT = this.opentokService.getOT();
    this.publishOptions = {
      videoSource: null, insertMode: 'append', height: "100px",
      width: "100px", showControls: true};
    
    this.publisher = OT.initPublisher(this.publisherDiv.nativeElement, this.publishOptions);
    this.publisher.setStyle('backgroundImageURI',
      'https://mbtskoudsalg.com/explore/cartoon-microphone-png/#gal_post_3455_cartoon-microphone-png-8.png'
    );
    if (this.session) {
      if (this.session['isConnected']()) {
      
          this.publish();
        
        
      }
      this.session.on('sessionConnected', () => this.publish());
    }
  }


  publish() {
     
      this.session.publish(this.publisher, (err) => {
        if (err) {
          console.log(err.message);
        } else {
          this.publishing = true;
        }
      });
    
    
  }

}
