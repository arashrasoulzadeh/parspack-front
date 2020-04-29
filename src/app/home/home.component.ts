import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import {  Process } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    processes: Process[];

    constructor(private userService: UserService) {
        //@ts-ignore
        String.prototype.trunc = String.prototype.trunc ||
      function(n){
          return (this.length > n) ?  '...' + this.substr(this.length-n+1)  : this;
      };

     }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(processes => {
            this.loading = false;
            this.processes = processes;
        });
        setTimeout(() => {
            this.ngOnInit();
        }, 3000);
    }
}