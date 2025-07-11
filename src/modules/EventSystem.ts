import { PetState } from './PetState';

export class EventSystem {
  constructor(private petState: PetState) {}

  checkEvents(): string | null {
    if (this.petState.hunger <= 0 || this.petState.love <= 0 || this.petState.cleanliness <= 0) {
      return 'Your pet has died! :(';
    }
    if (this.petState.education >= 100) {
      return 'Your pet has graduated! 🎓';
    }
    // TODO: Add more events like illness if cleanliness low
    return null;
  }
} 