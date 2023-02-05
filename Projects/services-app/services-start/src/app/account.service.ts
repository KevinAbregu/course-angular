import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";


@Injectable()
export class AccountService {

  constructor(private loggingService: LoggingService){}

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();

      addAccount(nameAcc: string, statusAcc: string){
          this.accounts.push({name: nameAcc, status: statusAcc})
          this.loggingService.logStatusChange(statusAcc);

      }

      updateStatus(id: number, status: string){
          this.accounts[id].status = status;
          this.loggingService.logStatusChange(status);

      }

}