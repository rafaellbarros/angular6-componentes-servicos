import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task/task.model';

const TASKS: Task[] = [
  {id: 1, name: 'Trabalhar'},
  {id: 2, name: 'Lavar pratos'},
  {id: 3, name: 'Tirar poeira'},
  {id: 4, name: 'Comprar no supermecado'},
  {id: 5, name: 'Cuidar das crianças'},
  {id: 6, name: 'Jogar videogame'},
  {id: 7, name: 'Almoçar'},
  {id: 8, name: 'Jantar'},
  {id: 9, name: 'Fazer exercício'},
  {id: 10, name: 'Pagar contas'}
];

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  title = 'Minhas Tarefas';
  tasks: Task[] = TASKS;
  selectedTask: Task;

  constructor() { }

  ngOnInit() {
  }

  onClick(task) {
    console.log(task);
    this.selectedTask = task;
  }

}
