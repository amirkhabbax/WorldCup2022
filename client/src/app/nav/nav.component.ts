import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = { }
  loggedin: boolean = false;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login(){
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.loggedin = true;
        }, 
      error: (error) => console.log(error)
  })
  }

  logout(){
    this.accountService.logout();
    this.loggedin = false;
  }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe({
      next: (user) => this.loggedin = !!user,
      error: (error) => console.log(error)
    })
  }
}
