// This file contains functions to interact with your custom WordPress REST API endpoints
// for storing data like orders and customers.

// Replace with your actual WordPress site URL and the correct endpoint for your Orders CPT
const WORDPRESS_API_URL = 'https://supershop63.com/wp-json/wp/v2/orders';

// Replace with your actual authentication token or method (e.g., Application Password)
const AUTH_TOKEN = 'YOUR_AUTHENTICATION_TOKEN';

interface OrderData {
  order_number: string;
  customer_name: string;
  items: Array<{ product_id: number; quantity: number }>; // Example structure
  total_amount: number;
  // Add other fields that match your custom fields in the 'Order' CPT
  [key: string]: any; // Allow for other custom fields
}

/**
 * Sends new order data to the custom WordPress REST API endpoint.
 * Assumes you have a Custom Post Type 'order' set up in WordPress
 * with fields matching the OrderData interface.
 *
 * @param orderData - The data for the new order.
 * @returns A Promise that resolves with the created order data from the API.
 */
export const createNewOrder = async (orderData: OrderData): Promise<any> => {
  try {
    const response = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTH_TOKEN}`, // Use your chosen authentication method
      },
      body: JSON.stringify({
        // Map your frontend data to the structure expected by your WordPress CPT and fields
        // This might vary based on how you set up your CPT and custom fields (e.g., using ACF)
        title: orderData.order_number, // Using order number as post title example
        status: 'publish', // Or 'pending', 'processing', etc.
        fields: { // Example if using Advanced Custom Fields (ACF)
          customer_name: orderData.customer_name,
          items: orderData.items,
          total_amount: orderData.total_amount,
          // ... map other fields
        }
        // If not using ACF for custom fields, you might include them directly in the body
        // depending on your custom endpoint setup.
      })
    });

    if (!response.ok) {
      const errorBody = await response.json();
      console.error('Error response body:', errorBody);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Order created successfully:', result);
    return result;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// You can add similar functions here for creating/updating/fetching customers,
// fetching specific orders by number, etc., depending on your needs
// and the custom endpoints you set up in WordPress.

/*
// Example function to fetch an order by its custom field 'order_number'
// This would require a custom REST API endpoint in WordPress to handle this query.
export const getOrderByNumber = async (orderNumber: string): Promise<any> => {
  try {
    // This endpoint is hypothetical and depends on your custom WordPress setup
    const response = await fetch(`https://your-wordpress-site.com/wp-json/your-namespace/v1/orders/by-number/${orderNumber}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`, // If authentication is required for reading
      },
    });

    if (!response.ok) {
      const errorBody = await response.json();
      console.error('Error response body:', errorBody);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Order fetched successfully:', result);
    return result;
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
};
*/
