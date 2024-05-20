import React from 'react';

function Quest({ description, status }) {
  return (
    <div>
      <h2>Quest</h2>
      <p>{description}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default Quest;
