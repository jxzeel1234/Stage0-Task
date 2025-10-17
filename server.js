
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Route: /me
app.get('/me', async (req, res) => {
  try {
    // Fetch dynamic cat fact
    const response = await axios.get('https://catfact.ninja/fact');

    // Set correct Content-Type header
    res.setHeader('Content-Type', 'application/json');

    // Send properly structured JSON response
    res.json({
      status: 'success',
      user: {
        name: 'Adegoke Yusrah',
        email: 'adegokeyusrah06@gmail.com',
      },
      fact: response.data.fact, // dynamic fact
      timestamp: new Date().toISOString(), // valid ISO timestamp
    });
  } catch (error) {
    console.error('Error fetching cat fact:', error.message);

    // Return clean error response
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}/me`);
});
