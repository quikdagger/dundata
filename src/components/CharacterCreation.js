import React, { useState } from 'react';
import { createCharacter } from '../utils/characterGenerator';
import gameRules from '../data/gameRules.json';
import { rollAbilityScores } from '../utils/diceRoller';
import { getAbilityModifiers } from '../utils/modifiers';

function CharacterCreation({ onCreateCharacter }) {
  const [name, setName] = useState('');
  const [characterClass, setCharacterClass] = useState('Magic-User'); // Default to Magic-User for now
  const [race, setRace] = useState('Human'); // Default to Human for now
  const [alignment, setAlignment] = useState('Law');
  const [abilityScores, setAbilityScores] = useState(rollAbilityScores());
  const [createdCharacter, setCreatedCharacter] = useState(null);

  const handleCreateCharacter = () => {
    const newCharacter = createCharacter(name, characterClass, race, alignment, abilityScores);
    setCreatedCharacter(newCharacter);
    onCreateCharacter(newCharacter);
  };

  const abilityModifiers = getAbilityModifiers(abilityScores);

  return (
    <div>
      <h2>Create a New Character</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Class:
        <select value={characterClass} onChange={(e) => setCharacterClass(e.target.value)}>
          {Object.keys(gameRules.classes).map(cls => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>
      </label>
      <label>
        Race:
        <select value={race} onChange={(e) => setRace(e.target.value)}>
          {gameRules.races.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </label>
      <label>
        Alignment:
        <select value={alignment} onChange={(e) => setAlignment(e.target.value)}>
          {gameRules.alignments.map(align => (
            <option key={align} value={align}>{align}</option>
          ))}
        </select>
      </label>

      <div>
        <h3>Ability Scores</h3>
        {Object.keys(abilityScores).map(score => (
          <div key={score}>
            <label>{score}: {abilityScores[score]} (Modifier: {abilityModifiers[score]})</label>
          </div>
        ))}
      </div>

      <button onClick={handleCreateCharacter}>Create Character</button>

      {createdCharacter && (
        <div>
          <h3>Character Created:</h3>
          <pre>{JSON.stringify(createdCharacter, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default CharacterCreation;
