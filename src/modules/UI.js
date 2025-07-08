export class UI {
    constructor(petState) {
        this.petState = petState;
        this.setupElements();
    }
    
    setupElements() {
        this.elements = {
            petSprite: document.getElementById('pet-sprite'),
            petName: document.getElementById('pet-name'),
            hungerBar: document.getElementById('hunger-bar'),
            loveBar: document.getElementById('love-bar'),
            cleanlinessBar: document.getElementById('cleanliness-bar'),
            educationBar: document.getElementById('education-bar'),
            statusMessage: document.getElementById('status-message'),
            actionButtons: document.querySelectorAll('#actions-container button')
        };
    }
    
    updateDisplay(petState) {
        this.petState = petState;
        const stats = petState.getStats();
        const stage = petState.getStage();
        const isAlive = petState.isPetAlive();
        
        // Update pet sprite based on stage and health
        this.updatePetSprite(stage, stats);
        
        // Update pet name
        this.elements.petName.textContent = this.getPetName(stage);
        
        // Update stat bars
        this.elements.hungerBar.style.width = `${stats.hunger}%`;
        this.elements.loveBar.style.width = `${stats.love}%`;
        this.elements.cleanlinessBar.style.width = `${stats.cleanliness}%`;
        this.elements.educationBar.style.width = `${stats.education}%`;
        
        // Update bar colors based on values
        this.updateBarColors();
        
        // Disable buttons if pet is dead
        this.elements.actionButtons.forEach(button => {
            button.disabled = !isAlive;
        });
        
        // Update status if pet is dead
        if (!isAlive) {
            this.elements.statusMessage.textContent = 'Your pet has passed away... 💔';
        }
    }
    
    updatePetSprite(stage, stats) {
        let sprite = '🐣';
        
        if (!this.petState.isPetAlive()) {
            sprite = '💀';
        } else {
            switch (stage) {
                case 'baby':
                    sprite = '🐣';
                    break;
                case 'child':
                    sprite = '🐤';
                    break;
                case 'teen':
                    sprite = '🐥';
                    break;
                case 'adult':
                    sprite = '🐔';
                    break;
            }
        }
        
        this.elements.petSprite.textContent = sprite;
    }
    
    getPetName(stage) {
        const names = {
            'baby': 'Baby Pet',
            'child': 'Young Pet',
            'teen': 'Teen Pet',
            'adult': 'Adult Pet'
        };
        return names[stage] || 'Pet';
    }
    
    updateBarColors() {
        const stats = this.petState.getStats();
        
        // Update hunger bar color
        if (stats.hunger < 20) {
            this.elements.hungerBar.style.background = 'linear-gradient(90deg, #ff4444, #cc0000)';
        } else if (stats.hunger < 50) {
            this.elements.hungerBar.style.background = 'linear-gradient(90deg, #ffaa00, #ff8800)';
        } else {
            this.elements.hungerBar.style.background = 'linear-gradient(90deg, #4CAF50, #45a049)';
        }
        
        // Update love bar color
        if (stats.love < 20) {
            this.elements.loveBar.style.background = 'linear-gradient(90deg, #ff4444, #cc0000)';
        } else if (stats.love < 50) {
            this.elements.loveBar.style.background = 'linear-gradient(90deg, #ffaa00, #ff8800)';
        } else {
            this.elements.loveBar.style.background = 'linear-gradient(90deg, #4CAF50, #45a049)';
        }
        
        // Update cleanliness bar color
        if (stats.cleanliness < 20) {
            this.elements.cleanlinessBar.style.background = 'linear-gradient(90deg, #ff4444, #cc0000)';
        } else if (stats.cleanliness < 50) {
            this.elements.cleanlinessBar.style.background = 'linear-gradient(90deg, #ffaa00, #ff8800)';
        } else {
            this.elements.cleanlinessBar.style.background = 'linear-gradient(90deg, #4CAF50, #45a049)';
        }
        
        // Update education bar color
        if (stats.education < 20) {
            this.elements.educationBar.style.background = 'linear-gradient(90deg, #ff4444, #cc0000)';
        } else if (stats.education < 50) {
            this.elements.educationBar.style.background = 'linear-gradient(90deg, #ffaa00, #ff8800)';
        } else {
            this.elements.educationBar.style.background = 'linear-gradient(90deg, #4CAF50, #45a049)';
        }
    }
    
    showMessage(message) {
        this.elements.statusMessage.textContent = message;
        
        // Clear message after 3 seconds
        setTimeout(() => {
            if (this.elements.statusMessage.textContent === message) {
                this.elements.statusMessage.textContent = 'Take care of your pet!';
            }
        }, 3000);
    }
    
    getPetState() {
        return this.petState;
    }
} 