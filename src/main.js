import { PetState } from './modules/PetState.js';
import { GameEngine } from './modules/GameEngine.js';
import { UserActions } from './modules/UserActions.js';
import { EventSystem } from './modules/EventSystem.js';
import { UI } from './modules/UI.js';
import { Persistence } from './modules/Persistence.js';
import { AudioVisual } from './modules/AudioVisual.js';

class TamagotchiGame {
    constructor() {
        this.petState = new PetState();
        this.persistence = new Persistence();
        this.audioVisual = new AudioVisual();
        
        // Inject animations
        this.audioVisual.injectAnimations();
        
        // Initialize modules
        this.ui = new UI(this.petState);
        this.eventSystem = new EventSystem(this.ui);
        this.gameEngine = new GameEngine(this.petState, this.eventSystem, this.ui);
        this.userActions = new UserActions(this.petState, this.eventSystem, this.ui);
        
        this.setupGame();
    }
    
    setupGame() {
        // Try to load saved game
        if (this.persistence.hasSaveData()) {
            const saveInfo = this.persistence.getSaveInfo();
            if (saveInfo) {
                const shouldLoad = confirm(
                    `Found saved game from ${new Date(saveInfo.saveTime).toLocaleString()}\n` +
                    `Pet age: ${Math.floor(saveInfo.petAge)} minutes, Stage: ${saveInfo.petStage}\n` +
                    'Would you like to load it?'
                );
                
                if (shouldLoad) {
                    this.persistence.loadGame(this.petState);
                }
            }
        }
        
        // Initialize UI
        this.ui.updateDisplay(this.petState);
        
        // Start game engine
        this.gameEngine.start();
        
        // Setup auto-save
        this.setupAutoSave();
        
        console.log('Tamagotchi game initialized');
    }
    
    setupAutoSave() {
        // Auto-save every 30 seconds
        setInterval(() => {
            if (this.petState.isPetAlive()) {
                this.persistence.saveGame(this.petState);
            }
        }, 30000);
    }
    
    // Public methods for debugging/testing
    getPetState() {
        return this.petState;
    }
    
    getGameEngine() {
        return this.gameEngine;
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.tamagotchiGame = new TamagotchiGame();
}); 