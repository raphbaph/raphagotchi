
A browser-based Tamagotchi game where players care for a virtual pet. 
The pet has internal state consisting of
- Hunger 
- Love
- Cleanliness
- Education

The game simulates passage of time and life progression.


## MODULES OVERVIEW
Module	Responsibility
GameEngine	Main loop and time control
PetState	Holds pet stats and handles state updates
UserActions	Defines player interactions
EventSystem	Triggers reactions to pet state changes
UI	Displays pet, stats, buttons, messages
Persistence	Saves and loads game state
AudioVisual	Animations and sounds (optional/polish)

1. GameEngine
Purpose: Runs the game loop at a fixed interval and triggers periodic state updates.

2. PetState
Purpose: Represents all dynamic attributes of the pet and provides controlled mutations of the state.

3. UserActions
Purpose: Defines how user input modifies pet state. User can:
- Feed
- Cuddle
- Educate
- Clean
- Give Vitamins

4. EventSystem
Purpose: Contains logic for side-effects and game progression (e.g. death, evolution, illness).

5. UI
Purpose: Renders pet sprite, stat bars, buttons, and status messages.

6. Persistence
Purpose: Save and load the game state from localStorage.

7. AudioVisual 
Purpose: Adds sounds and visual feedback for immersion.

## Tech Stack
- Javascript
- React
- Vite
- HTML5