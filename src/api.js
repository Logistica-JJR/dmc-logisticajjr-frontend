export const fetchOrders = async () => {
  const response = await fetch('https://backend-app.internal.livelydesert-6725c03a.westus2.azurecontainerapps.io:5000/orders');
  if (!response.ok) throw new Error('Failed to fetch orders');
  return response.json();
};