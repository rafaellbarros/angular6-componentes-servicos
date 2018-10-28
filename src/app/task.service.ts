import { Injectable } from '@angular/core';
import { Task } from './task/task.model';

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


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }

  getTask(id: number): Task|null {
    const array = this.getTasks().filter(item => item.id === id);
      return array.length ? array[0] : null;
  }

  createTask(task: Task) {
    task.id = this.getTasks().length + 1;
    this.getTasks().push(task);
  }
}
