import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { DataService } from '../shared/data.service';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService); // se accede al servicio
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the user name if the user is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance; // instancia actual de la aplicación.
    app.isLoggedIn = true;
    fixture.detectChanges(); // se actualizan los cambios
    let compiled = fixture.debugElement.nativeElement; // template
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });

  it('should display the user name if the user is not logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance; // instancia actual de la aplicación.
    fixture.detectChanges(); // se actualizan los cambios
    let compiled = fixture.debugElement.nativeElement; // template
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance; // instancia actual de la aplicación.
    let dataService = fixture.debugElement.injector.get(DataService); // se accede al servicio
    // mock del servicio
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'))
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });

  it('should fetch data successfully if called asynchronously', waitForAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance; // instancia actual de la aplicación.
    let dataService = fixture.debugElement.injector.get(DataService); // se accede al servicio
    // mock del servicio
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'))
    fixture.detectChanges();
    // Para indicar que es asincrono y tiene que esperar a estar estable
    fixture.whenStable().then(() => {
      expect(app.data).toBe('Data');
    })
  }));

  it('should fetch data successfully if called fake asynchronously', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance; // instancia actual de la aplicación.
    let dataService = fixture.debugElement.injector.get(DataService); // se accede al servicio
    // mock del servicio
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'))
    fixture.detectChanges();
    // Para indicar que es asincrono y tiene que esperar a estar estable
    tick(); // termina la tarea asincrona ya.
    expect(app.data).toBe('Data');
    
  }));
});
