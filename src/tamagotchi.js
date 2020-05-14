const MAX_FOOD_LEVEL = 10;
const MAX_PLAY_LEVEL = 15;
const MAX_SLEEP_LEVEL = 25;

export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLevel = MAX_FOOD_LEVEL;
    this.playlevel = MAX_PLAY_LEVEL;
    this.sleeplevel = MAX_SLEEP_LEVEL;

    this.startLifecycle();
  }

  startLifecycle() {
    this.tick = setInterval(() => {
      this.foodLevel--;
      this.playlevel--;
      this.sleeplevel--;
    }, 1000);
  }

  isAlive() {
    if (this.sleeplevel <= 0 || this.playlevel <= 0 || this.foodLevel <= 0) {
      clearInterval(this.tick);
      this.tick = null;
      false;
    }
    return true;
  }
  feed() {
    if (!this.isAlive()) {
      throw new Error(`${this.name} is dead`);
    }
    this.foodLevel = MAX_FOOD_LEVEL;
  }

  play() {
    if (!this.isAlive()) {
      throw new Error(`${this.name} is dead`);
    }
    this.playlevel = MAX_PLAY_LEVEL;
  }

  sleep() {
    if (!this.isAlive()) {
      throw new Error(`${this.name} is dead`);
    }
    this.sleeplevel = MAX_SLEEP_LEVEL;
  }
}

// ......................................End................................
