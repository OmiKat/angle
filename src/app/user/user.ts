import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { User } from './user.model';
import { Card } from "../ui/card/card";

// type User = {
//   id: string;
//     name: string;
//     avatar: string;
// }


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {

  @Input({required:true}) user!: User;
  @Input({required:true}) selected!:boolean;

  @Output() select = new EventEmitter();

  // select = output<string>();

  get imagePath(){
    return '/assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
// by using SIGNALS
// photo = input.required<string>();
// name = input.required<string>();

// imagePath = computed(() => '/assets/users/' + this.photo())
