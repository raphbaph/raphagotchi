import { useRef, useState, useEffect } from 'react';
import { PetState } from './modules/PetState';
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
    setTamaMinutesElapsed((prev) => {
      const newMinutes = prev + 1;

      // Every 60 minutes (1 Tamagotchi hour)
      if (newMinutes % 60 === 0) {
        petRef.current.decayHunger();
        petRef.current.decayLove();
      }
      // Every 4 hours (240 minutes)
      if (newMinutes % 240 === 0) {
        petRef.current.decayCleanliness();
      }

      handleUpdate();
      return newMinutes;
    });
  };

  const handleAction = () => {
    handleUpdate(); // Only update UI and save, do not increment time
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleTamaMinute();
    }, 500); // 7.5s per hour, so 125ms per minute (7.5s / 60 = 0.125s = 125ms)
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
