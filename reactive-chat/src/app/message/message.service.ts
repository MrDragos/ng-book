import {Message} from "./message.model";
import {Subject} from "rxjs";
import {Thread} from "../thread/thread.model";
import {User} from "../user/user.model";
import {filter} from "rxjs/operators";

export class MessageService {

  newMessages: Subject<Message> = new Subject<Message>();

  addMessage(message: Message): void {
    this.newMessages.next(message);
  }

  messagesForThreadUser(thread: Thread, user: User) {
    return this.newMessages.pipe(
      filter((message: Message) => {
        return (message.thread.id === thread.id) && (message.author.id != user.id)
      })
    );
  }
}
