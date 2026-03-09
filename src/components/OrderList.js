import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../api';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders()
      .then(data => {
        setOrders(data); // data es un array
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando orden...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!orders.length) return <p>No hay órdenes disponibles.</p>;

  // Por ahora mostramos solo la primera orden
  const order = orders[0];

  return (
    <div>
      <h2>Orden #{order?.idOrder || "Desconocido"}</h2>
      <h3>Cliente: {order?.client?.name || "Desconocido"}</h3>
      <h3>Vendedor: {order?.user?.firstName} {order?.user?.lastName}</h3>

      <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {order?.orderDetail?.map(detail => (
            <tr key={detail.idOrderDetail}>
              <td>{detail.product?.name || "Desconocido"}</td>
              <td>{detail.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Creado: {order?.createdAt ? new Date(order.createdAt).toLocaleString() : "Desconocido"}</p>
    </div>
  );
};

export default OrderList;