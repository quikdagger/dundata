import React, { useState } from 'react';

function CharacterCreation() {
  const [name, setName] = useState('');
  const [characterClass, setCharacterClass] = useState('Fighter');
  const [stats, setStats] = useState({
    strength: 10,
    intelligence: 10,
    wisdon: 10,
    dexterity: 10,
    constitution: 10,
    charisma: 10,
  });

  const handleCreateCharacter = () => {
    // Logic to create and save the character
  };

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
          <option value="Fighter">Fighter</option>
          <option value="Cleric">Cleric</option>
          <option value="Magic-user">Magic-user</option>
          <option value="Thief">Thief</option>
          <option value="Elf">Elf</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Halfling">Halfling</option>
        </select>
      </label>
      {/* Add more stat inputs as needed */}
      <button onClick={handleCreateCharacter}>Create Character</button>
    </div>
  );
}

export default CharacterCreation;
