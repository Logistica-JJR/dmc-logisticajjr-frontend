import React from 'react';
import OrderList from './components/OrderList';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Detalle de la Orden</h1>
      <OrderList />
    </div>
  );
}

export default App;