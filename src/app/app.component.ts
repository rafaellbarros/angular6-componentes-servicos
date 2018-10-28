import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  messages: Alert[];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
     this.messages = this.messageService.messages;
  }

}
