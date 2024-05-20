import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CharacterCreation from './CharacterCreation';
import CharacterList from './CharacterList';

function App() {
  const [characters, setCharacters] = useState([]);

  const handleCharacterCreation = (newCharacter) => {
    setCharacters([...characters, newCharacter]);
  };

  return (
    <Router>
      <div className="App">
        <h1>Dungeons and Data</h1>
        <nav>
          <ul>
            <li>
              <Link to="/create-character">Create Character</Link>
            </li>
            <li>
              <Link to="/">Character List</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/create-character">
            <CharacterCreation onCreateCharacter={handleCharacterCreation} />
          </Route>
          <Route path="/">
            <CharacterList characters={characters} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
