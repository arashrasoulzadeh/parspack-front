import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import {  Process } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'file.component.html' })
export class FileComponent {
    loading = false;
    loading_create = false;
    dirs: [];
    name;

    constructor(private userService: UserService) {
        this.name="test";
        //@ts-ignore
        String.prototype.trunc = String.prototype.trunc ||
      function(n){
          return (this.length > n) ?  '...' + this.substr(this.length-n+1)  : this;
      };

     }


     listDirectories(){
        this.loading = true;
        this.dirs = [];
        this.userService.getDirectories().pipe(first()).subscribe(dirs => {
            this.loading = false;
            //@ts-ignore 
            this.dirs = dirs;
        }); 
     }

     listFiles(){
        this.loading = true;
        this.dirs = [];
        this.userService.getFiles().pipe(first()).subscribe(dirs => {
            this.loading = false;
            //@ts-ignore 
            this.dirs = dirs;
        }); 
     }
     create_file(){
        this.loading_create = true;
        this.dirs = [];
        this.userService.createFile(this.name).pipe(first()).subscribe(dirs => {
            this.loading_create = false;
            this.listFiles();
            //@ts-ignore 
            this.dirs = dirs;
        },error => {
            console.log(error);
            alert("امکان ایجاد فایل وجود ندارد.")
            this.loading_create=false;
        }); 
     }
     create_directory(){
        this.loading_create = true;
        this.dirs = [];
        this.userService.createDirectory(this.name).pipe(first()).subscribe(dirs => {
            this.loading_create = false;
            this.listDirectories();
            //@ts-ignore 
            this.dirs = dirs;
        },error => {
            console.log(error);
            alert("امکان ایجاد فایل وجود ندارد.")
            this.loading_create=false;
        }); 
     }
    ngOnInit() {
       
    }
}