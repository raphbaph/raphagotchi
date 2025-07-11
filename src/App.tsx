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

  const userActions = new UserActions(petRef.current);
  const eventSystem = new EventSystem(petRef.current);

  const handleUpdate = () => {
    const msg = eventSystem.checkEvents();
    setMessage(msg);
    forceUpdate(prev => prev + 1);
    Persistence.save(petRef.current);
  };

  const handleAction = () => {
    handleUpdate(); // Check events and save after action
  };

  useEffect(() => {
    const engine = new GameEngine(petRef.current, handleUpdate);
    engine.start();
    return () => engine.stop();
  }, []);

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
    />
  );
}

export default App;
