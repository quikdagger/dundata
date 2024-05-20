import React from 'react';

function Combat({ character, enemy }) {
  const rollD20 = () => Math.floor(Math.random() * 20) + 1;

  const attack = () => {
    const attackRoll = rollD20();
    if (attackRoll > enemy.armorClass) {
      // Hit logic
    } else {
      // Miss logic
    }
  };

  return (
    <div>
      <h2>Combat</h2>
      <button onClick={attack}>Attack</button>
    </div>
  );
}

export default Combat;
