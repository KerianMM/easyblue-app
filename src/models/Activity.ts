export interface ActivityInterface {
  id: string;
  date: string;
  action: string;
  subject: string;
  userId: string;
}

export class Activity implements ActivityInterface{
  id: string;
  date: string;
  action: string;
  subject: string;
  userId: string;

  constructor(id: string, date: string, action: string, subject: string, userId: string) {
    this.id = id;
    this.date = date;
    this.action = action;
    this.subject = subject;
    this.userId = userId;
  }
}