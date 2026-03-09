export const fetchOrders = async () => {
  const response = await fetch('http://backend-app:5000/orders');
  if (!response.ok) throw new Error('Failed to fetch orders');
  return response.json();
};