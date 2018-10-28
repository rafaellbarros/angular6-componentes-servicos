import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import {  Router } from '@angular/router';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  task: Task = {
    id: 0,
    name: ''
  };

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public submit() {
    this.taskService.createTask(this.task);
    this.router.navigate(['tasks', 'list']);
  }

}
