import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptBidipick } from '@demo/shared';
import {} from '@nativescript/nativescript-bidipick';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptBidipick {}
