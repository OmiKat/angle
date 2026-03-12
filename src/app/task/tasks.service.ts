import { NewTask } from './new-task/new-task';
import { dummyTasks } from "../dummyTask";
import { newTask } from './new-task/new-task.model';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class TaskService {

  private tasks = dummyTasks;

  getUserTasks(UserId:string){
    return this.tasks.filter((task) => task.userId === UserId);
  }

  AddTask(TaskData: newTask , id :string){
    this.tasks.unshift({
      id: new Date().getMilliseconds().toString(),
      userId : id,
      title : TaskData.title,
      summary : TaskData.summary,
      dueDate : TaskData.date,
    })
  }
  removeTask(id: string){
     this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
