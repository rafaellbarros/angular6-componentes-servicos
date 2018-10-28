import { TaskService } from './../task.service';
import { Component } from '@angular/core';
import { Task } from './task.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'task-edit',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskEditComponent {

  task: Task;
  constructor(private taskService: TaskService, private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      const id = +params['id'];
      this.task = this.taskService.getTask(id);
      if (!this.task) {
        alert('Tarefa não exite');
      }
    });
  }

}
