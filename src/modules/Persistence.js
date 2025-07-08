export class Persistence {
    constructor() {
        this.storageKey = 'tamagotchi_save';
    }
    
    saveGame(petState) {
        try {
            const saveData = {
                petState: petState.toJSON(),
                saveTime: Date.now()
            };
            
            localStorage.setItem(this.storageKey, JSON.stringify(saveData));
            console.log('Game saved successfully');
            return true;
        } catch (error) {
            console.error('Failed to save game:', error);
            return false;
        }
    }
    
    loadGame(petState) {
        try {
            const saveData = localStorage.getItem(this.storageKey);
            
            if (!saveData) {
                console.log('No save data found');
                return false;
            }
            
            const parsedData = JSON.parse(saveData);
            petState.fromJSON(parsedData.petState);
            
            console.log('Game loaded successfully');
            return true;
        } catch (error) {
            console.error('Failed to load game:', error);
            return false;
        }
    }
    
    hasSaveData() {
        return localStorage.getItem(this.storageKey) !== null;
    }
    
    deleteSaveData() {
        try {
            localStorage.removeItem(this.storageKey);
            console.log('Save data deleted');
            return true;
        } catch (error) {
            console.error('Failed to delete save data:', error);
            return false;
        }
    }
    
    getSaveInfo() {
        try {
            const saveData = localStorage.getItem(this.storageKey);
            if (!saveData) return null;
            
            const parsedData = JSON.parse(saveData);
            return {
                saveTime: parsedData.saveTime,
                petAge: parsedData.petState.age,
                petStage: parsedData.petState.stage
            };
        } catch (error) {
            console.error('Failed to get save info:', error);
            return null;
        }
    }
} 