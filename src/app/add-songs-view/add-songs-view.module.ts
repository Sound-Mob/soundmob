import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { QueueComponent } from './queue/queue.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchComponent, QueueComponent],
  exports:[
    SearchComponent,
    QueueComponent
  ]
})
export class AddSongsViewModule { }
