export class AudioVisual {
    constructor() {
        this.animations = new Map();
        this.setupAnimations();
    }
    
    setupAnimations() {
        // Simple CSS animations for feedback
        this.animations.set('feed', () => this.animatePet('bounce'));
        this.animations.set('cuddle', () => this.animatePet('pulse'));
        this.animations.set('clean', () => this.animatePet('shake'));
        this.animations.set('educate', () => this.animatePet('glow'));
        this.animations.set('vitamins', () => this.animatePet('spin'));
    }
    
    animatePet(animationType) {
        const petSprite = document.getElementById('pet-sprite');
        
        // Remove existing animation classes
        petSprite.classList.remove('bounce', 'pulse', 'shake', 'glow', 'spin');
        
        // Add new animation class
        petSprite.classList.add(animationType);
        
        // Remove animation class after animation completes
        setTimeout(() => {
            petSprite.classList.remove(animationType);
        }, 1000);
    }
    
    triggerAnimation(action) {
        const animation = this.animations.get(action);
        if (animation) {
            animation();
        }
    }
    
    // Add CSS animations to the document
    injectAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-10px); }
                60% { transform: translateY(-5px); }
            }
            
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
            
            @keyframes glow {
                0%, 100% { filter: brightness(1); }
                50% { filter: brightness(1.3); }
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            .bounce { animation: bounce 1s ease-in-out; }
            .pulse { animation: pulse 1s ease-in-out; }
            .shake { animation: shake 0.5s ease-in-out; }
            .glow { animation: glow 1s ease-in-out; }
            .spin { animation: spin 1s linear; }
        `;
        document.head.appendChild(style);
    }
} 