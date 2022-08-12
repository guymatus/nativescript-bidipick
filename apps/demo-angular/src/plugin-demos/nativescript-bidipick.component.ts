import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptBidipick } from '@demo/shared';
import {} from './nativescript-bidipick.module';

@Component({
  selector: 'demo-nativescript-bidipick',
  templateUrl: 'nativescript-bidipick.component.html',
})
export class NativescriptBidipickComponent {
  demoShared: DemoSharedNativescriptBidipick;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptBidipick();
  }
}
