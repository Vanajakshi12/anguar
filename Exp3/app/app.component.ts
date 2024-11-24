import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exp3';
  
  registrationForm = new FormGroup({
    username: new FormControl('Admin'),
    password: new FormControl(''),
    cfnpassword: new FormControl('')
  });

  loginRequest() {
    console.log(this.registrationForm.value);
  }
}
