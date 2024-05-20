import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
        <Routes>
          <Route path="/create-character" element={<CharacterCreation onCreateCharacter={handleCharacterCreation} />} />
          <Route path="/" element={<CharacterList characters={characters} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
