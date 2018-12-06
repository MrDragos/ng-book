import {BehaviorSubject, Subject} from "rxjs";
import {User} from "./user.model";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export const userServiceInjectables: Array<any> = [UserService];
