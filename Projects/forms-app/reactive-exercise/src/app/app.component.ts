import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  form: FormGroup;
  projectStatus: string[] = ['Stable', 'Critical', 'Finished'];

  ngOnInit(){
    this.form = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.forbiddenProjectNames.bind(this)),
      'mail': new FormControl(null, [Validators.required,Validators.email]),
      'projectStatus': new FormControl('Stable'),
    })
  }


  onSubmit():void {
    console.log(this.form);
  }

  forbiddenProjectNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (control.value === "Test"){
            return resolve({'nameIsForbidden': true});
          }else{
            return resolve(null);
          }
        },1000)
      })
    return promise;
  }
}
