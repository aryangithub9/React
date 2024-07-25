import React, { useState } from 'react';

function C2() {


    const [player, setPlayer] = useState([]);

    const addPlayer = () => {
        const np = document.getElementById("input").value.trim();
        if (np !== '') {
        setPlayer(p => [...p, np]);
        document.getElementById("input").value = "";
    }
  };

  const removePlayer = (index) => {
    setPlayer(p => p.filter((p, i) => i !== index));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addPlayer();
    }
  };

  return (
    <div className="footballplayer">
      <h1>List of Football Player</h1>
      <ol>
        {player.map((pn, index) =>
          <li key={index} onClick={() => removePlayer(index)}>{pn}</li>
        )}
      </ol>

      <input type="text" id="input" onKeyUp ={handleKeyPress} />
      <button onClick={addPlayer}>Add player</button>
    </div>
  );
}

export default C2;