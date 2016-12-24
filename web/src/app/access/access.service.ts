import {Injectable} from '@angular/core';
import {Right} from "./right";

const RIGHTS: Right[] = [
  new Right(1),
  new Right(2),
  new Right(3)
];

const FETCH_LATENCY = 500;

@Injectable()
export class AccessService {

  getRights() {
    return new Promise<Right[]>(resolve => {
      setTimeout(() => {
        resolve(RIGHTS);
      }, FETCH_LATENCY);
    });
  }

  getRight(id: number | string) {
    return this.getRights()
      .then(rights => rights.find(right => right.id === +id));
  }

}
