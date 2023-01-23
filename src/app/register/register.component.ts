import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

   model = {
    firstName:'',
    lastName:'',
    email: '',
    password: '',
    mobile:'',
    confirm:''
  };

   onSubmit(form:any) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
