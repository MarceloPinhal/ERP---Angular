import { Component, OnInit} from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet><app-loading *ngIf="loading"></app-loading>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent implements OnInit {
  loading: boolean = false;

  public token: any = "";



  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    ){}

  ngOnInit() {
  this.token = localStorage.getItem('token')
      if(!this.token){
        this.router.navigate(['/'])
  }
}

}








