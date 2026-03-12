import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './usertask.model';
import { Card } from "../../ui/card/card";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-usertasks',
  imports: [Card , DatePipe],
  templateUrl: './usertasks.html',
  styleUrl: './usertasks.css',
})
export class UsertasksComponent {
[x: string]: any;

  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter();

  onCompleteTask(){
    this.complete.emit(this.task.id);
  }

}
