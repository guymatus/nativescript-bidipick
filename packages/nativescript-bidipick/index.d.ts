import { Common, Options } from './common';

export declare class NativescriptBidipick extends Common {
  public showDateRangePicker(): void;
  public getSelectedDates(): any;
  public options: (_options: Options) => void;
  public start: (view) => any;
}

export function create(options?: Options): NativescriptBidipick;
