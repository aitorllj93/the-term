
import {Injectable} from '@angular/core';

import * as Noty from 'noty';
import { Options as NotyOptions, NotyInstance } from 'noty';

export { Options as NotyOptions, NotyInstance } from 'noty';

@Injectable({
  providedIn: 'root'
})
export class NotyService {

    create(options: NotyOptions): NotyInstance {
      return new Noty(options) as NotyInstance;
    }

    closeAll(name?: string) {
      Noty.closeAll(name);
    }

    setMaxVisible(count: number, name?: string) {
      Noty.setMaxVisible(count, name);
    }
}
