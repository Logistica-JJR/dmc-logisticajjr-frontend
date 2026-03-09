export const fetchOrders = async () => {
  const response = await fetch('http://dmcBackend/orders');
  if (!response.ok) throw new Error('Failed to fetch orders');
  return response.json();
};