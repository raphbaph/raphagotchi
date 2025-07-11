import { PetState } from './PetState';

export class UserActions {
  constructor(private petState: PetState) {}

  feed() {
    this.petState.feed();
  }

  cuddle() {
    this.petState.cuddle();
  }

  clean() {
    this.petState.clean();
  }

  educate() {
    this.petState.educate();
  }

  giveVitamins() {
    this.petState.giveVitamins();
  }
} 