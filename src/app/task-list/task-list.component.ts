import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  title = 'Minhas Tarefas';
  tasks: Task[];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  public goToEdit(id: number) {
    this.router.navigate(['tasks', id, 'edit']);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

}
