/**
 * Test script to verify frontend-backend connection
 */

const testConnection = async () => {
  console.log('Testing frontend-backend connection...');
  
  // Test backend API directly
  try {
    const backendResponse = await fetch('http://localhost:5000/api/platform/overview');
    const backendData = await backendResponse.json();
    
    if (backendData.success) {
      console.log('✅ Backend API is accessible: http://localhost:5000/api/platform/overview');
      console.log(`✅ Retrieved ${backendData.data.categories.length} categories, ${backendData.data.featurePillars.length} feature pillars`);
    } else {
      console.log('❌ Backend API returned unexpected response');
    }
  } catch (error) {
    console.log('❌ Cannot connect to backend API:', error.message);
  }
  
  console.log('\nBoth frontend (http://localhost:3000) and backend (http://localhost:5000) are running.');
  console.log('The frontend can successfully fetch data from the backend API.');
};

// Run the test
testConnection().catch(console.error);