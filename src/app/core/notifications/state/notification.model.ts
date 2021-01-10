
import { NotyInstance } from 'noty';
import { NotyOptions } from '../providers/noty.service';

export class Notification<DataType = any> {
  id?: string;
  type?: string;
  title?: string;
  text: string;
  picture?: string;
  source: string;
  data?: DataType;
  floattingInstance?: Partial<NotyInstance>;
  options?: NotyOptions;
}
