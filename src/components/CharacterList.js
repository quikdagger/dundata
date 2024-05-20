import React from 'react';

function CharacterList({ characters }) {
  return (
    <div>
      <h2>Created Characters</h2>
      <ul>
        {characters.map((char, index) => (
          <li key={index}>
            {char.name} - {char.class}
            <pre>{JSON.stringify(char, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
