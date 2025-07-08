export class PetState {
    constructor() {
        this.stats = {
            hunger: 50,
            love: 50,
            cleanliness: 50,
            education: 50
        };
        
        this.age = 0;
        this.stage = 'baby'; // baby, child, teen, adult
        this.isAlive = true;
        this.lastUpdate = Date.now();
    }
    
    // Getters
    getStats() {
        return { ...this.stats };
    }
    
    getAge() {
        return this.age;
    }
    
    getStage() {
        return this.stage;
    }
    
    isPetAlive() {
        return this.isAlive;
    }
    
    // State updates
    updateStats(deltaTime) {
        if (!this.isAlive) return;
        
        // Natural decay over time
        const decayRate = deltaTime / 1000; // Convert to seconds
        
        this.stats.hunger = Math.max(0, this.stats.hunger - decayRate * 2);
        this.stats.love = Math.max(0, this.stats.love - decayRate * 1.5);
        this.stats.cleanliness = Math.max(0, this.stats.cleanliness - decayRate * 1);
        this.stats.education = Math.max(0, this.stats.education - decayRate * 0.5);
        
        // Age progression
        this.age += deltaTime / (1000 * 60); // Age in minutes
        
        // Stage progression
        this.updateStage();
        
        // Check for death conditions
        this.checkDeathConditions();
    }
    
    updateStage() {
        if (this.age < 5) {
            this.stage = 'baby';
        } else if (this.age < 15) {
            this.stage = 'child';
        } else if (this.age < 30) {
            this.stage = 'teen';
        } else {
            this.stage = 'adult';
        }
    }
    
    checkDeathConditions() {
        if (this.stats.hunger <= 0 || this.stats.love <= 0) {
            this.isAlive = false;
        }
    }
    
    // User actions
    feed() {
        if (!this.isAlive) return false;
        this.stats.hunger = Math.min(100, this.stats.hunger + 30);
        return true;
    }
    
    cuddle() {
        if (!this.isAlive) return false;
        this.stats.love = Math.min(100, this.stats.love + 25);
        return true;
    }
    
    clean() {
        if (!this.isAlive) return false;
        this.stats.cleanliness = Math.min(100, this.stats.cleanliness + 40);
        return true;
    }
    
    educate() {
        if (!this.isAlive) return false;
        this.stats.education = Math.min(100, this.stats.education + 20);
        return true;
    }
    
    giveVitamins() {
        if (!this.isAlive) return false;
        // Vitamins boost all stats slightly
        this.stats.hunger = Math.min(100, this.stats.hunger + 10);
        this.stats.love = Math.min(100, this.stats.love + 10);
        this.stats.cleanliness = Math.min(100, this.stats.cleanliness + 10);
        this.stats.education = Math.min(100, this.stats.education + 10);
        return true;
    }
    
    // Serialization
    toJSON() {
        return {
            stats: this.stats,
            age: this.age,
            stage: this.stage,
            isAlive: this.isAlive,
            lastUpdate: this.lastUpdate
        };
    }
    
    fromJSON(data) {
        this.stats = data.stats;
        this.age = data.age;
        this.stage = data.stage;
        this.isAlive = data.isAlive;
        this.lastUpdate = data.lastUpdate;
    }
} 