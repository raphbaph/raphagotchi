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
  tamaTime: string;
};

export const PetUI: React.FC<UIProps> = ({ petState, userActions, message, tamaTime }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f7f9fa' }}>
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 40, minWidth: 350, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ alignSelf: 'flex-end', color: '#6b7280', fontSize: 15, marginBottom: 4, fontFamily: 'monospace' }}>
          <span role="img" aria-label="clock">⏰</span> {tamaTime}
        </div>
        <h1 style={{ marginBottom: 16, color: '#22313f', fontWeight: 700 }}>Tamagotchi Pet</h1>
        <div style={{ fontSize: '90px', marginBottom: 16 }}>🐶</div>
        <div style={{ width: '100%', marginBottom: 24 }}>
          <StatBar label="Hunger" value={petState.hunger} />
          <StatBar label="Love" value={petState.love} />
          <StatBar label="Cleanliness" value={petState.cleanliness} />
          <StatBar label="Education" value={petState.education} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, width: '100%', justifyContent: 'center', marginBottom: 12 }}>
          <button style={buttonStyle} onClick={() => userActions.feed()}>Feed</button>
          <button style={buttonStyle} onClick={() => userActions.cuddle()}>Cuddle</button>
          <button style={buttonStyle} onClick={() => userActions.clean()}>Clean</button>
          <button style={buttonStyle} onClick={() => userActions.educate()}>Educate</button>
          <button style={buttonStyle} onClick={() => userActions.giveVitamins()}>Give Vitamins</button>
        </div>
        {message && <p style={{ color: '#d7263d', fontWeight: 600, marginTop: 8 }}>{message}</p>}
      </div>
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  background: '#22313f',
  color: 'white',
  border: 'none',
  borderRadius: 8,
  padding: '8px 16px',
  fontWeight: 500,
  fontSize: 15,
  cursor: 'pointer',
  transition: 'background 0.2s',
};

type StatBarProps = { label: string; value: number };
const StatBar: React.FC<StatBarProps> = ({ label, value }) => (
  <div style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ width: 90, textAlign: 'right', color: '#22313f', fontWeight: 500 }}>{label}:</span>
    <div style={{ background: '#e0e7ef', width: '120px', height: '18px', borderRadius: 8, overflow: 'hidden', marginRight: 6 }}>
      <div style={{ background: '#2563eb', width: `${value}%`, height: '100%', borderRadius: 8, transition: 'width 0.3s' }}></div>
    </div>
    <span style={{ minWidth: 32, color: '#22313f', fontWeight: 500 }}>{value}%</span>
  </div>
); 