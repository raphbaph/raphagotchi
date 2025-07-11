import { PetState } from './PetState';

export class GameEngine {
  private intervalId: NodeJS.Timeout | null = null;
  private minuteCounter: number = 0;

  constructor(private petState: PetState, private onUpdate: () => void) {}

  start() {
    this.intervalId = setInterval(() => {
      this.petState.decayHunger();
      this.petState.decayLove();
      this.minuteCounter++;
      if (this.minuteCounter % 4 === 0) {
        this.petState.decayCleanliness();
      }
      this.onUpdate();
    }, 60000); // Every minute
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
} 