import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  baseAssetsUrl = 'assets/users/';

  imagePath = computed(() => this.baseAssetsUrl + this.selectedUser().avatar);

  getUserAvatarUrl(): string {
    return this.baseAssetsUrl + this.selectedUser().avatar;
  }

  // get imagePath(): string {
  //   return this.getUserAvatarUrl(); // this.baseAssetsUrl + this.selectedUser.avatar;
  // }

  onSelectedUser() {

    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    console.log('User selected:'+ this.selectedUser().name);
  }
}
