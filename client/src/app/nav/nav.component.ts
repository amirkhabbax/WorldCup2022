import { Component, Input, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() titleFromApp:any;
  model: any = { };
  user: User | undefined;
  
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    
  }

  login(){
    this.accountService.login(this.model).subscribe({
      next: (response) => {
       // console.log(response);
        }, 
      error: (error) => console.log(error)
  })
  }

  logout(){
    this.accountService.logout();
  }

}
