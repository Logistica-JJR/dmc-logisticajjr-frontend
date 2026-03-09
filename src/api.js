export const fetchOrders = async () => {
  const response = await fetch('http://localhost:8080/orders');
  if (!response.ok) throw new Error('Failed to fetch orders');
  return response.json();
};