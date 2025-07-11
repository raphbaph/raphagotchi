import { PetState } from './PetState';

export class Persistence {
  private static KEY = 'tamagotchi_state';

  static save(petState: PetState) {
    localStorage.setItem(this.KEY, JSON.stringify(petState));
  }

  static load(): PetState | null {
    const data = localStorage.getItem(this.KEY);
    if (data) {
      const parsed = JSON.parse(data);
      return new PetState(parsed);
    }
    return null;
  }
} 