import { Component, Input } from '@angular/core';

class Task {
  id: number;
  name: string;
}

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
  selector: 'app-task-edit',
  template: `
  <div *ngIf="task">
    <input type="text" [(ngModel)]="task.name"/>
  </div>
  `
})

export class TaskEditComponent {
  @Input()
  task: Task;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Lista de Tarefas';
  tasks: Task[] = TASKS;
  selectedTask: Task;

  onClick(task) {
    console.log(task);
    this.selectedTask = task;
  }
}
