import React from 'react';

function App() {
  const name = 'Volodymyr Pukha';
  const year = new Date().getFullYear();
  const address = '40 , New Bond Street, W1S 2RX, London, United Kingdom';
  const phone = '+44 7700150703';
  return (
    <div style={{textAlign: 'center'}} class="main">
      <h1>MYPULLUP LIMITED</h1>
      <p>{name}</p>
      <p>Game Developer Studio</p>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{year} Copyright. All Rights Reserved.</p>
    </div>
  );
}

export default App;
