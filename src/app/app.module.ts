import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskEditComponent } from './task/task-edit.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskService } from './task.service';
import { TaskNewComponent } from './task-new/task-new.component';
import { AlertModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    TaskEditComponent,
    TaskListComponent,
    TaskNewComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, AlertModule.forRoot()
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
