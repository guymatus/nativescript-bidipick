import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptBidipickComponent } from './nativescript-bidipick.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptBidipickComponent }])],
  declarations: [NativescriptBidipickComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptBidipickModule {}
