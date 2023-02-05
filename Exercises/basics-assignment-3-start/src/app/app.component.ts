import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayParagraph = false;
  clicksArray = [];

  changeParagraph(){
    this.displayParagraph = !this.displayParagraph;
    this.clicksArray.push(new Date());
  }

  getBackgroundColor(value:number){
    return value >= 5 ? 'blue' : 'transparent';
  }

}
