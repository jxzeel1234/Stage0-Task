const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/me', async (req, res) => {
  try {
    const response = await axios.get('https://catfact.ninja/fact');
    res.json({
      status: 'success',
      user: {
        email: 'adegokeyusrah06@gmail.com',
        name: 'Adegoke Yusrah',
        stack: 'Node.js/Express',
      },
      timestamp: new Date().toISOString(),
      fact: response.data.fact,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Could not fetch cat fact',
    });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

