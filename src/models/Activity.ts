import {Base} from "@/models/Base";

export interface ActivityInterface extends Base {
  id: string;
  date: string;
  action: string;
  subject: string;
  userId: string;
}
