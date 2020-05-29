import {Base} from "@/models/Base";

export interface LocationInterface {
  address: string;
  city: string;
  code: string;
  country: string;
}

export interface CompanyInterface extends Base {
  id: string;
  name: string;
  location: LocationInterface;
  userId: string;
}
