import React from 'react';

function NPC({ name, traits }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{traits.join(', ')}</p>
    </div>
  );
}

export default NPC;
