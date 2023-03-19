import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { Register } from '../../../models/iform';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from './../../../shared/services/users.service';
import { AuthService } from 'src/shared/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  token!: string;
  username!: string;
  role!: string;
  loading: boolean = false;

  constructor(
    private form: FormBuilder,
    private users: UsersService,
    private router: Router,
    private AuthService: AuthService
  ) {
    this.registerForm = this.form.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required,]],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.registerForm.valid) {
      const register: Register = {
        user: this.registerForm.get('user')?.value,
        password: this.registerForm.get('password')?.value,
      };

      this.users.login(register).subscribe((data: any) => {
           console.log(data)
          this.token = data.token;
          this.username = data.userDB.name;
          this.role = data.userDB.rol;
          this.AuthService.user = data.userDB
         
          localStorage.setItem('token', this.token);
          localStorage.setItem('username', this.username);
          localStorage.setItem('role', this.role);
          this.router.navigate(['/home']);
      });
      
    }

    this.registerForm.reset; /* para resetear todos los datos */
    this.submitted = false;
  }
}
