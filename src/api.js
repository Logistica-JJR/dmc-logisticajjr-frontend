const BASE_URL = '/api';  // se usará el proxy de Vite

export const fetchOrders = async () => {
  const response = await fetch('${BASE_URL}/orders');
  if (!response.ok) throw new Error('Failed to fetch orders');
  return response.json();
};