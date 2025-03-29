import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, NgFor, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  name = 'My Tasks';
  selectedUserId = 'u1';

  get selectedUser() {
    const user = this.users.find(user => user.id === this.selectedUserId)!;
    console.log("Selected user: " + user.name);
    return user;
  }

  onUserSelected(id: string) {
    console.log("User selected APP: " + id);
    this.selectedUserId = id;
  }
}
