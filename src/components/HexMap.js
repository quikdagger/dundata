import React from 'react';

function HexMap({ mapData }) {
  return (
    <div>
      <h2>Game Map</h2>
      <div className="hex-map">
        {mapData.map((hex, index) => (
          <div key={index} className={`hex ${hex.type}`}>
            {hex.type}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HexMap;
