export class EventSystem {
    constructor(ui) {
        this.ui = ui;
        this.events = [];
        this.lastEventTime = 0;
    }
    
    checkEvents(petState) {
        const stats = petState.getStats();
        const age = petState.getAge();
        const stage = petState.getStage();
        
        // Check for critical conditions
        if (stats.hunger < 20) {
            this.triggerEvent('hungry', 'Your pet is very hungry! 😰');
        }
        
        if (stats.love < 20) {
            this.triggerEvent('lonely', 'Your pet feels lonely! 😢');
        }
        
        if (stats.cleanliness < 20) {
            this.triggerEvent('dirty', 'Your pet needs a bath! 🛁');
        }
        
        // Check for stage evolution
        if (age >= 5 && stage === 'child') {
            this.triggerEvent('evolve', 'Your pet evolved to a child! 🎉');
        } else if (age >= 15 && stage === 'teen') {
            this.triggerEvent('evolve', 'Your pet evolved to a teenager! 🎉');
        } else if (age >= 30 && stage === 'adult') {
            this.triggerEvent('evolve', 'Your pet evolved to an adult! 🎉');
        }
        
        // Check for death
        if (!petState.isPetAlive()) {
            this.triggerEvent('death', 'Your pet has passed away... 💔');
        }
    }
    
    triggerAction(action) {
        // Handle special events based on actions
        const petState = this.ui.getPetState();
        const stats = petState.getStats();
        
        // Check for perfect care moments
        if (stats.hunger > 80 && stats.love > 80 && stats.cleanliness > 80) {
            this.triggerEvent('perfect_care', 'Perfect care! Your pet is thriving! 🌟');
        }
    }
    
    triggerEvent(type, message) {
        const currentTime = Date.now();
        
        // Prevent spam of the same event
        if (currentTime - this.lastEventTime < 3000) {
            return;
        }
        
        this.lastEventTime = currentTime;
        this.events.push({ type, message, timestamp: currentTime });
        
        // Show event message
        this.ui.showMessage(message);
        
        console.log(`Event triggered: ${type} - ${message}`);
    }
    
    getEvents() {
        return [...this.events];
    }
    
    clearEvents() {
        this.events = [];
    }
} 