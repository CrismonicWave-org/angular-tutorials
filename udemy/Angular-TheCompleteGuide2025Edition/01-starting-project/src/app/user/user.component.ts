import { Component, Input, Output, input, output, computed, EventEmitter } from '@angular/core';
import User from './userInterface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // avatar = input.required<string>()
  // name = input.required<string>()
  // id = input.required<string>()
  @Input({ required: true }) user!: User;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;

  @Output() selectUser = new EventEmitter<string>(); // Changed from 'select' to 'selectUser'
  //select = output<string>();

  imagePath = computed( () => {
    return "assets/users/" + this.user.avatar;
  });

  onSelectedUser() {
    // console.log("User selected UC: " +
    //   this.name + " " + this.id);
    this.selectUser.emit(this.user.id);
  }

}
