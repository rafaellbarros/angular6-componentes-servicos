import { MessageService } from './../message.service';
import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'task-edit',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskEditComponent implements OnInit {

  task: Task;
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getTaskId();
  }

  private getTaskId() {
    this.route.params.forEach((params: Params) => {
      const id = +params['id'];
      this.task = this.taskService.getTask(id);
      if (!this.task) {
        alert('Tarefa não exite');
      }
    });
  }

  public submit() {
    this.messageService.messages.push({
      type: 'success',
      message: 'Tarefa alterada com sucesso'
    });
    this.router.navigate(['tasks', 'list']);
  }
}
