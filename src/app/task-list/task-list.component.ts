import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task.model';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  title = 'Minhas Tarefas';
  tasks: Task[];
  selectedTask: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  selectTask(task) {
    console.log(task);
    this.selectedTask = task;
  }

  deleteTask(id: number) {
    const index = this.tasks.findIndex(item => item.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

}
