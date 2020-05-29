import {Base} from "@/models/Base";

export interface ReceiptInterface extends Base {
  id: string;
  date: string;
  name: string;
  userId: string;
}
