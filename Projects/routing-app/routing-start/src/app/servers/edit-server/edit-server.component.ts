import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate, OnDestroy {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;
  paramsSubscription: Subscription;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams: Params) => {this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;}
    );
    this.route.fragment.subscribe();
    var id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => id = +params['id']
    )
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(["../",{relativeTo: this.route}])
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowEdit){
      return true;
    }

    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved){
      return confirm("Do you want to discard the changes");
    }else{
      return true;
    }
  }

}
