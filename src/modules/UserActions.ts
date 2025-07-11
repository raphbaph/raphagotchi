import { PetState } from './PetState';

export class UserActions {
  private petState: PetState;
  constructor(petState: PetState) {
    this.petState = petState;
  }

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