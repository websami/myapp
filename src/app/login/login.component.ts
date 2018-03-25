import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: string = '';
    password: string = '';
    return: string = '';
    
  constructor(private router:Router, private email:UserService) { }

  ngOnInit() {
  }
    
    loginUser(e) {
        e.preventDefault();
        console.log(e);
        var email =  e.target.elements[0].value;
        var password = e.target.elements[1].value;
        
        if(email == '' && password == ''){ //test@nv.com tested
            this.email.setUserLoggedIn();
            this.router.navigate(['dashboard']);
            console.log("trueasdf");
        }
    }

}
