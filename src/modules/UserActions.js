export class UserActions {
    constructor(petState, eventSystem, ui) {
        this.petState = petState;
        this.eventSystem = eventSystem;
        this.ui = ui;
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        document.getElementById('feed-btn').addEventListener('click', () => this.feed());
        document.getElementById('cuddle-btn').addEventListener('click', () => this.cuddle());
        document.getElementById('clean-btn').addEventListener('click', () => this.clean());
        document.getElementById('educate-btn').addEventListener('click', () => this.educate());
        document.getElementById('vitamins-btn').addEventListener('click', () => this.giveVitamins());
    }
    
    feed() {
        if (this.petState.feed()) {
            this.ui.showMessage('Yum! Your pet enjoyed the food! 🍎');
            this.eventSystem.triggerAction('feed');
        } else {
            this.ui.showMessage('Your pet cannot eat anymore... 💔');
        }
    }
    
    cuddle() {
        if (this.petState.cuddle()) {
            this.ui.showMessage('Your pet feels loved! ❤️');
            this.eventSystem.triggerAction('cuddle');
        } else {
            this.ui.showMessage('Your pet cannot feel love anymore... 💔');
        }
    }
    
    clean() {
        if (this.petState.clean()) {
            this.ui.showMessage('Your pet is now clean and fresh! 🧼');
            this.eventSystem.triggerAction('clean');
        } else {
            this.ui.showMessage('Your pet cannot be cleaned anymore... 💔');
        }
    }
    
    educate() {
        if (this.petState.educate()) {
            this.ui.showMessage('Your pet learned something new! 📚');
            this.eventSystem.triggerAction('educate');
        } else {
            this.ui.showMessage('Your pet cannot learn anymore... 💔');
        }
    }
    
    giveVitamins() {
        if (this.petState.giveVitamins()) {
            this.ui.showMessage('Vitamins boosted your pet\'s health! 💊');
            this.eventSystem.triggerAction('vitamins');
        } else {
            this.ui.showMessage('Your pet cannot take vitamins anymore... 💔');
        }
    }
} 