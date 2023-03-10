import React from 'react';
import './fonts.css';

function App() {
  const name = 'Volodymyr Pukha';
  const year = new Date().getFullYear();
  return (
    <div style={{textAlign: 'center', fontFamily: 'TTOctosquaresBlackfont'}}>
      <h1>MYPULLUP LIMITED</h1>
      <p>{name}</p>
      <p>{year} Copyright. All Rights Reserved.</p>
    </div>
  );
}

export default App;
