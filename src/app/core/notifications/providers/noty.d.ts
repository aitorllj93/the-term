
import * as Noty from 'noty';
import { Options as NotyOptions } from 'noty';

declare module 'noty' {
  export interface NotyInstance extends Noty {
    closeTimer: number;
    closed: boolean;
    closing: boolean;
    hasSound: boolean;
    id: string;
    options: NotyOptions,
    showing: boolean
    shown: boolean
    soundPlayed: boolean
  }
}
