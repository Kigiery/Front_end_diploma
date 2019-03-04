import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {User} from './user';

   
@Component({
    selector: 'app-root',
    templateUrl:'./app.component.html',
    providers: [HttpService]
})
export class AppComponent implements OnInit { 
   
     
    constructor(){}
      
    ngOnInit(){
          
    }
}
