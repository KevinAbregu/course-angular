import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  submitted: boolean = false;
  userData = {
    email: '',
    subscription: '',
    password: '',
  }

  subscriptions = ['Pro', 'Advanced', 'Basic'];


  onSubmit():void{
    console.log(this.form);
    this.submitted = true;
    this.userData.email = this.form.value.mail;
    this.userData.password = this.form.value.pass;
    this.userData.subscription = this.form.value.subscription;
  }
}
