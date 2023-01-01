import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnDestroy {

  $sub = new Subscription();

  constructor() { }

  ngOnDestroy(): void {
    this.$sub.unsubscribe();
  }

}
