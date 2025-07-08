export class GameEngine {
    constructor(petState, eventSystem, ui) {
        this.petState = petState;
        this.eventSystem = eventSystem;
        this.ui = ui;
        this.gameLoop = null;
        this.updateInterval = 1000; // 1 second
        this.isRunning = false;
    }
    
    start() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.gameLoop = setInterval(() => {
            this.update();
        }, this.updateInterval);
        
        console.log('Game engine started');
    }
    
    stop() {
        if (!this.isRunning) return;
        
        this.isRunning = false;
        if (this.gameLoop) {
            clearInterval(this.gameLoop);
            this.gameLoop = null;
        }
        
        console.log('Game engine stopped');
    }
    
    update() {
        const currentTime = Date.now();
        const deltaTime = currentTime - this.petState.lastUpdate;
        
        // Update pet state
        this.petState.updateStats(deltaTime);
        this.petState.lastUpdate = currentTime;
        
        // Trigger events
        this.eventSystem.checkEvents(this.petState);
        
        // Update UI
        this.ui.updateDisplay(this.petState);
        
        // Check if game should stop
        if (!this.petState.isPetAlive()) {
            this.stop();
        }
    }
    
    getUpdateInterval() {
        return this.updateInterval;
    }
    
    setUpdateInterval(interval) {
        this.updateInterval = interval;
        if (this.isRunning) {
            this.stop();
            this.start();
        }
    }
} 