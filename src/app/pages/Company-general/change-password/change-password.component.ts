import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/shared/services/users.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  userId: string = '';
  newPassword: string = '';
  currentPassword: string= '';

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
  }

  onSubmit(form: NgForm) {
    const body = {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword
    }
    console.log(body);
    
    this.usersService.changePassword(this.userId, body).subscribe({
      next: () => {
        console.log('Password changed successfully');
        this.router.navigate(['users']);
      },
      error: (err) => {
        console.error('Error occurred while changing password', err.message);
      },
      complete: () => {
        console.log('Password change complete');
      }
    });
  }
}