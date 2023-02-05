import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  intervalEvent = new EventEmitter<number>();
  
  incrementalNumber: number = 0;
  interval;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(): void{
    this.interval = setInterval(() => {
      this.incrementalNumber++;
      this.intervalEvent.emit(this.incrementalNumber);
    },1000);
  }

  onStopGame(): void{
    clearInterval(this.interval);
  }

}
