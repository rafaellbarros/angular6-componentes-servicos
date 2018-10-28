import { Injectable } from '@angular/core';

export class Alert {
    message: string;
    type: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() { }

  public messages: Alert[] = [];
}
