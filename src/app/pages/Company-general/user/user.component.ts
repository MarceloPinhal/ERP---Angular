import { IUser } from './../interface/interfaces';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/shared/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: IUser[]=[]

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users)
    })
  }

  changePassword(user: IUser) {
    this.router.navigate(['users/changePassword', user._id]);
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe((data) => {
      console.log(data);
      location.reload();
      // this.router.navigate(['/users'])
    })
    console.log('voy a borrar' + userId);
  }
  createUser() {
    this.router.navigate(['users/register'])
  }
}