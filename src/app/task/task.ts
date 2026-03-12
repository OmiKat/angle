import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsertasksComponent } from "./usertasks/usertasks";
import { dummyTasks } from '../dummyTask';
import { NewTask } from "./new-task/new-task";
import { newTask } from './new-task/new-task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-task',
  imports: [UsertasksComponent, NewTask],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {

  constructor(taskService: TaskService){
    this.taskService = taskService;
  }

  private taskService:TaskService;


  @Input({required:true}) id! :string;
  @Input({required:true}) name!: string;
  isAddingTask = false;


  @Output() addtask = new EventEmitter();

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  get selectedUserTask(){
    return this.taskService.getUserTasks(this.id);
  }
  onComplete(id:string){
    this.taskService.removeTask(id);
  }

  onAddTask(TaskData : newTask){
    this.isAddingTask = false;
  }

}
