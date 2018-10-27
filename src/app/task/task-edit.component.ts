import { Component, Input } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-edit',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskEditComponent {
  @Input()
  task: Task;
}
