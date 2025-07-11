import { useRef, useState, useEffect } from 'react';
import { PetState } from './modules/PetState';
import { GameEngine } from './modules/GameEngine';
import { UserActions } from './modules/UserActions';
import { EventSystem } from './modules/EventSystem';
import { Persistence } from './modules/Persistence';
import { PetUI } from './modules/UI';

function App() {
  const petRef = useRef<PetState>(Persistence.load() || new PetState());
  const [message, setMessage] = useState<string | null>(null);
  const [_, forceUpdate] = useState(0);
  const [tamaMinutesElapsed, setTamaMinutesElapsed] = useState(0); // total Tamagotchi minutes

  const userActions = new UserActions(petRef.current);
  const eventSystem = new EventSystem(petRef.current);

  // Called for both timer and user actions
  const handleUpdate = () => {
    const msg = eventSystem.checkEvents();
    setMessage(msg);
    forceUpdate(prev => prev + 1);
    Persistence.save(petRef.current);
  };

  // Only called by timer
  const handleTamaMinute = () => {
    setTamaMinutesElapsed((m) => m + 1);
    handleUpdate();
  };

  const handleAction = () => {
    handleUpdate(); // Only update UI and save, do not increment time
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleTamaMinute();
    }, 450); // 7.5s per hour, so 450ms per minute (7.5s / 16 = 0.46875s)
    return () => clearInterval(interval);
  }, []);

  // Format Tamagotchi time as hh:mm
  const hours = Math.floor(tamaMinutesElapsed / 60) % 24;
  const minutes = tamaMinutesElapsed % 60;
  const tamaTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return (
    <PetUI 
      petState={petRef.current} 
      userActions={{
        feed: () => { userActions.feed(); handleAction(); },
        cuddle: () => { userActions.cuddle(); handleAction(); },
        clean: () => { userActions.clean(); handleAction(); },
        educate: () => { userActions.educate(); handleAction(); },
        giveVitamins: () => { userActions.giveVitamins(); handleAction(); },
      }} 
      message={message} 
      tamaTime={tamaTime}
    />
  );
}

export default App;
