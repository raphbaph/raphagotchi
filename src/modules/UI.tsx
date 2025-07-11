import React from 'react';
import { PetState } from './PetState';
import { UserActions } from './UserActions';

type UIProps = {
  petState: PetState;
  userActions: {
    feed: () => void;
    cuddle: () => void;
    clean: () => void;
    educate: () => void;
    giveVitamins: () => void;
  };
  message: string | null;
};

export const PetUI: React.FC<UIProps> = ({ petState, userActions, message }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Tamagotchi Pet</h1>
      <div style={{ fontSize: '100px' }}>🐶</div> {/* Simple pet sprite */}
      <div>
        <StatBar label="Hunger" value={petState.hunger} />
        <StatBar label="Love" value={petState.love} />
        <StatBar label="Cleanliness" value={petState.cleanliness} />
        <StatBar label="Education" value={petState.education} />
      </div>
      <div>
        <button onClick={() => userActions.feed()}>Feed</button>
        <button onClick={() => userActions.cuddle()}>Cuddle</button>
        <button onClick={() => userActions.clean()}>Clean</button>
        <button onClick={() => userActions.educate()}>Educate</button>
        <button onClick={() => userActions.giveVitamins()}>Give Vitamins</button>
      </div>
      {message && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
};

type StatBarProps = { label: string; value: number };
const StatBar: React.FC<StatBarProps> = ({ label, value }) => (
  <div>
    {label}: 
    <div style={{ background: '#ddd', width: '200px', height: '20px', display: 'inline-block' }}>
      <div style={{ background: 'blue', width: `${value}%`, height: '100%' }}></div>
    </div>
    {value}%
  </div>
); 