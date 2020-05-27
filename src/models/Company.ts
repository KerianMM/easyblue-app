export interface LocationInterface {
  address: string;
  city: string;
  code: string;
  country: string;
}

export interface CompanyInterface {
  id: string;
  name: string;
  location: LocationInterface;
  userId: string;
}

export class Company implements CompanyInterface{
  id: string;
  name: string;
  location: LocationInterface;
  userId: string;

  constructor(id: string, name: string, location: LocationInterface, userId: string) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.userId = userId;
  }
}