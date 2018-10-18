import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-mat-slider',
  templateUrl: './mat-slider.component.html',
  styleUrls: ['./mat-slider.component.css']
})
export class MatSliderComponent implements OnInit {
  public value: number = 0;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }
  onChange(event) {
    this.value = event.value;
    this.chatService.changeVolume(event.value);
  }

}
