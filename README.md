# 🐣 Tamagotchi Game

A modern, browser-based Tamagotchi game built with React and Vite. Take care of your virtual pet by managing their hunger, love, cleanliness, and education levels!

## 🎮 Game Features

### Pet Statistics
- **Hunger**: Decreases by 25% every minute
- **Love**: Decreases by 10% every minute  
- **Cleanliness**: Decreases by 40% every four minutes
- **Education**: Starts at 5%, doesn't decrease, can be increased through education

### Pet Care Actions
- **Feed** 🍎: Increases hunger by 30%
- **Cuddle** ❤️: Increases love by 25%
- **Clean** 🧼: Increases cleanliness by 50%
- **Educate** 📚: Increases education by 5% (costs 10% hunger, 5% love)
- **Vitamins** 💊: Increases all stats by 10%

### Game Features
- **Real-time updates**: Game runs continuously with automatic state updates
- **Save/Load**: Automatic save/load functionality with localStorage
- **Visual feedback**: Animated pet sprites and status indicators
- **Responsive design**: Works on desktop and mobile devices
- **Event system**: Milestones, warnings, and death events
- **Auto-pause**: Game pauses when tab is not visible

## 🏗️ Architecture

The game follows a modular architecture with clear separation of concerns:

### Core Modules
- **GameEngine**: Main game loop and time control
- **PetState**: Pet statistics and state management
- **UserActions**: Player interactions and action handling
- **EventSystem**: Game events, milestones, and warnings
- **Persistence**: Save/load functionality

### UI Components
- **Tamagotchi**: Main game component
- **PetDisplay**: Pet sprite and status display
- **StatBar**: Individual statistic bars
- **ActionButton**: Interactive action buttons

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tamagotchi-game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎯 Game Rules

### Initial State
- All stats start at 70% (except education at 5%)
- Pet age starts at 0 minutes

### Stat Decay
- **Hunger**: -25% per minute
- **Love**: -10% per minute
- **Cleanliness**: -40% every 4 minutes
- **Education**: No decay

### Pet Death
The pet dies if any of these stats reach 0%:
- Hunger
- Love  
- Cleanliness

### Education System
- Education requires resources (hunger and love)
- Each education action costs 10% hunger and 5% love
- Education increases by 5% per successful action
- Cannot educate if resources are insufficient

## 🛠️ Technical Details

### Tech Stack
- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **CSS3**: Styling with modern features
- **localStorage**: Data persistence

### Key Features
- **Modular Design**: Clean separation of game logic and UI
- **Event-Driven**: Reactive updates based on game events
- **Responsive**: Mobile-first design approach
- **Accessible**: Keyboard navigation and screen reader support
- **Performance**: Optimized rendering and minimal re-renders

### File Structure
```
src/
├── components/          # React components
│   ├── Tamagotchi.jsx   # Main game component
│   ├── PetDisplay.jsx   # Pet sprite display
│   ├── StatBar.jsx      # Statistic bars
│   ├── ActionButton.jsx # Action buttons
│   └── *.css           # Component styles
├── modules/             # Game logic modules
│   ├── GameEngine.js    # Main game loop
│   ├── PetState.js      # Pet state management
│   ├── UserActions.js   # User interactions
│   ├── EventSystem.js   # Event handling
│   └── Persistence.js   # Save/load system
├── App.jsx              # Root component
├── App.css              # Global styles
└── main.jsx             # Entry point
```

## 🎨 Customization

### Modifying Game Balance
Edit the constants in the module files:
- `PetState.js`: Initial values and decay rates
- `UserActions.js`: Action effects and costs
- `GameEngine.js`: Update intervals

### Adding New Actions
1. Add the action method to `PetState.js`
2. Add the action handler to `UserActions.js`
3. Add the action button to `Tamagotchi.jsx`
4. Update the action mapping in the main component

### Styling
The game uses CSS modules and custom properties for easy theming. Main style files:
- `App.css`: Global styles
- `Tamagotchi.css`: Main game layout
- Component-specific CSS files

## 🐛 Troubleshooting

### Common Issues

**Game not saving:**
- Check browser localStorage support
- Ensure no private/incognito mode
- Check browser storage limits

**Performance issues:**
- Close other tabs to free memory
- Check for browser extensions interfering
- Ensure hardware acceleration is enabled

**Mobile issues:**
- Ensure viewport meta tag is present
- Test touch interactions
- Check for mobile-specific CSS issues

### Debug Mode
Open browser console to see:
- Game state updates
- Event triggers
- Save/load operations
- Performance metrics

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test on multiple browsers
- Ensure mobile compatibility
- Update documentation as needed

## 🎉 Acknowledgments

- Inspired by the classic Tamagotchi virtual pet
- Built with modern web technologies
- Designed for accessibility and user experience

---

**Enjoy taking care of your virtual pet! 🐾**
