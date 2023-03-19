import { IUser } from './../interface/interfaces';
import { UsersService } from './../../../../shared/services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent  implements OnInit{
  createUser: IUser[]=[];
  userForm!: FormGroup;
  submitted: boolean = false;
  name: string = '';
  user: string = '';
  password: string = '';
  rol: string = '';

  constructor(private form: FormBuilder,
    private usersService: UsersService,
    private route: Router) {
      this.userForm = this.form.group({
        name: ['', [Validators.required]],
        user: ['', [Validators.required]],
        password: ['', [Validators.required]],
        rol: ['', [Validators.required]]
      });
    }
    ngOnInit(): void {
      this.usersService.getUsers().subscribe((data: any) => {
        this.createUser = data
      })
    }
    onSubmit() {
      this.submitted = true;
      if (this.userForm.valid) {
        const createUser: IUser = 
        this.userForm.value;
        this.usersService.register(createUser).subscribe((response) => {
          console.log(response)
          this.userForm.reset();
          this.route.navigate(["/users"])
        })
        /* {
          
       / _id: this.userForm.get('_id')?.value,
        name: this.userForm.get('name')?.value,
        user: this.userForm.get('user')?.value,
        password: this.userForm.get('password')?.value,
        rol: this.userForm.get('user')?.value,
        };
        this.usersService.register(this.)
        this.userForm.reset();
        this.submitted = false; */
      }
      
    }
}
