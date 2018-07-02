import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {StateService} from './state.service';
import {LoadService} from './load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private router: Router, private loadService: LoadService, private stateService: StateService) {
  }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.indexOf('client-a') >= 0) {
          this.loadService.load('client-a');
        }
        if (event.url.indexOf('client-b') >= 0) {
          this.loadService.load('client-b');
        }

        this.stateService.setUrl(event.url);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
