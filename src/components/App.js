import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MainMenu from './MainMenu';
import CharacterManagement from './CharacterManagement';
import GameMap from './GameMap';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainMenu />
        <CharacterManagement />
        <GameMap />
      </div>
    </Provider>
  );
}

export default App;
