import { Component } from '@angular/core';
import { NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Router, Routes } from '@angular/router';  
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 8 project';
  
  constructor (private loadingBar:SlimLoadingBarService, private router:Router){
    this.router.events.subscribe((event:Event)=>{
      this.navigationIterceptor(event);
    });
  }

  navigationIterceptor(event: Event) {
    if(event instanceof this.navigationIterceptor){

    }
  }
}
