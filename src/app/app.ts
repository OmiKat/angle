import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummyUsers';
import { TaskComponent } from './task/task';;



@Component({
  selector: 'app-root',
  imports: [HeaderComponent ,UserComponent , TaskComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-1');
  users = DUMMY_USERS;
  

  selectedUserId?:string;

  get SelectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)
  }

  onSelectUser(id :string){
    this.selectedUserId = id;
  }
}
