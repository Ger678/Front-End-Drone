import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private authService: AuthService,
              private route: Router){} 

  onSubmit(){
    const isAuthenticated = this.authService.login(this.username, this.password);

    if(isAuthenticated) {
      this.route.navigate(['/sap'])
      console.log('Authent')
    }else {
      console.log('Login failed');
    }
  }

}
