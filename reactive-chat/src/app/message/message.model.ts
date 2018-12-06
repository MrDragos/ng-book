import {UUID} from "angular2-uuid";
import {User} from "../user/user.model";
import {Thread} from "../thread/thread.model";

export class Message {

  id: string;
  sentAt: Date;
  isRead: boolean;
  author: User;
  text: string;
  thread: Thread;

  constructor(obj?: any) {
    this.id = obj && obj.id || UUID.UUID();
    this.isRead = obj && obj.isRead || false;
    this.sentAt = obj && obj.sentAt || new Date();
    this.author = obj && obj.author || null;
    this.text = obj && obj.text || null;
    this.thread = obj && obj.thread || null;
  }
}
