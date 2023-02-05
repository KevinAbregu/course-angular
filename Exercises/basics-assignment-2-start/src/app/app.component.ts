import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = "";
  disabled = true;

  constructor() {}

  isEmptyString(event: Event){
      
    if((<HTMLInputElement>event.target).value.length > 0){
      this.disabled = false;
    }else{
      this.disabled = true;
    }
  }

  resetUsername(){
    this.username = "";
    this.disabled = true;
  }
}
