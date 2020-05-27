export interface PaymentInterface {
  id: string;
  mode: string;
  userId: string;
}

export class Payment implements PaymentInterface{
  id: string;
  mode: string;
  userId: string;

  constructor(id: string, mode: string, userId: string) {
    this.id = id;
    this.mode = mode;
    this.userId = userId;
  }
}