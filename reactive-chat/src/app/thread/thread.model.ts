import {UUID} from "angular2-uuid";
import {Message} from "../message/message.model";

export class Thread {
  id: string;
  lastMessage: Message;
  name: string;
  avatarSrc: string;

  constructor(id?: string,
              name?: string,
              avatarSrc?: string) {
    this.id = id || UUID.UUID();
    this.name = name;
    this.avatarSrc = avatarSrc;
  }

}
