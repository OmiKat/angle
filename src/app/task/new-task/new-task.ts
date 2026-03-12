import { TaskService } from './../tasks.service';
import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { newTask } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({required:true}) id!:string;
  @Output() Cancle = new EventEmitter<void>();
  @Output() add = new EventEmitter<newTask>();

  private TaskService = inject(TaskService);

  enteredTitle = "";
  enteredSummary = "";
  enteredDueDate = "";

  onCancle(){
    this.Cancle.emit();
  }

  onSubmit(){
    const taskData: newTask = {
      title: this.enteredTitle ,
      summary: this.enteredSummary,
      date: this.enteredDueDate,
    };

    this.TaskService.AddTask(taskData, this.id);
    this.add.emit(taskData);
    this.Cancle.emit();

   
  }
}
