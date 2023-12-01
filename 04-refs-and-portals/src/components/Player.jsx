import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleClick() {
    // You can access the builtin props of the elment who has the ref
    setEnteredPlayerName(playerName.current.value);
    // In React we don't manipulate directly the DOM
    // playerName.current.value = ''; is not a good practice
    // You should use states. However, for this small use case
    // it could be somewhat acceptable
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
