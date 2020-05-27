export interface ReceiptInterface {
  id: string;
  date: string;
  userId: string;
}

export class Receipt implements ReceiptInterface{
  id: string;
  date: string;
  userId: string;

  constructor(id: string, date: string, userId: string) {
    this.id = id;
    this.date = date;
    this.userId = userId;
  }
}