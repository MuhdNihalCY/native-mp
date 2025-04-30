// Simple login API handler
export async function login(userName: string, password: string): Promise<{ success: boolean; message?: string }> {
  try {
    // Replace with your backend endpoint
    const response = await fetch('https://your-backend.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, password }),
    });
    if (!response.ok) {
      return { success: false, message: 'Invalid credentials' };
    }
    // You can parse and handle token or user data here
    return { success: true };
  } catch (e) {
    return { success: false, message: 'Network error' };
  }
}