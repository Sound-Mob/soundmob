import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-king',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.css']
})
export class ListenerComponent implements OnInit {

  @Input() sai:'sai';




  constructor() {
  }

  ngOnInit() {
  }

}
