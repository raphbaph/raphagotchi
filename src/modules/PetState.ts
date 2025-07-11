export class PetState {
  public hunger: number;
  public love: number;
  public cleanliness: number;
  public education: number;

  constructor(initialState?: Partial<PetState>) {
    this.hunger = initialState?.hunger ?? 70;
    this.love = initialState?.love ?? 70;
    this.cleanliness = initialState?.cleanliness ?? 70;
    this.education = initialState?.education ?? 5;
  }

  // Time-based decays
  decayHunger() {
    this.hunger = Math.max(0, this.hunger - 25);
  }

  decayLove() {
    this.love = Math.max(0, this.love - 10);
  }

  decayCleanliness() {
    this.cleanliness = Math.max(0, this.cleanliness - 40);
  }

  // User actions
  feed() {
    this.hunger = Math.min(100, this.hunger + 30); // Assumed value: increases hunger by 30%
  }

  cuddle() {
    this.love = Math.min(100, this.love + 20); // Assumed value: increases love by 20%
  }

  clean() {
    this.cleanliness = Math.min(100, this.cleanliness + 40); // Assumed value: increases cleanliness by 40%
  }

  educate() {
    this.education = Math.min(100, this.education + 5);
    this.hunger = Math.max(0, this.hunger - 10);
    this.love = Math.max(0, this.love - 5);
  }

  giveVitamins() {
    // Assumed: slight boost to all states
    this.hunger = Math.min(100, this.hunger + 10);
    this.love = Math.min(100, this.love + 10);
    this.cleanliness = Math.min(100, this.cleanliness + 10);
  }
} 