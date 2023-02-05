import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root',})
export class CounterService{

    toActiveCount: number = 0;
    toInactiveCount: number = 0;

    incrementActive():void{
        this.toActiveCount++;
        console.log("Number of times (inactive -> active):" + this.toActiveCount);
    }
    incrementInactive():void{
        this.toInactiveCount++;
        console.log("Number of times (active -> inactive):" + this.toInactiveCount);
    }

}