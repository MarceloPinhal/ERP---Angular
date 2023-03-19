import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showDropdown: string = '';
  nameusuario!: any;
  constructor(private AuthService: AuthService, private router: Router){};

  ngOnInit(): void {
    this.nameusuario = localStorage.getItem("username");

 
  }
  toggleDropdown(option: string) {
    this.showDropdown = this.showDropdown === option ? '' : option;
  }

  logOut():void{
    this.AuthService.logOut();
    this.router.navigate([''])
  }
}
