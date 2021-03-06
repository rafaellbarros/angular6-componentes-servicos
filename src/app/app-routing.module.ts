import { TaskEditComponent } from './task/task-edit.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskNewComponent } from './task-new/task-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks/list', pathMatch: 'full'},
  { path: 'tasks/list', component: TaskListComponent },
  { path: 'tasks/new', component: TaskNewComponent },
  { path: 'tasks/:id/edit', component: TaskEditComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
