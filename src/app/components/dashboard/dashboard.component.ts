import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { CreateService } from './service/create.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private service : CreateService
    
  ) { }
 public webModal :any;
 public localStorage :any;
 public firstname:'';
 public modal:{
   firstname:'',
 }

  ngOnInit() { 
    this.getLocalStorage();
  }
  getLocalStorage(){
    this.localStorage = JSON.parse(localStorage.getItem('user'));
    console.log(this.localStorage.uid);
  }
  updateRecord(){
    console.log(this.modal);
    // this.service.updateUser(this.localStorage.uid,this.localStorage ,(data) =>{
      
    // })
   }
}
