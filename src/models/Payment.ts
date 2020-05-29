import {Base} from "@/models/Base";

export interface PaymentInterface extends Base {
  id: string;
  mode: string;
  code: string;
  userId: string;
}
