    const express = require('express');
    const app = express();
    const path = require('path'); // For serving static files

    // Serve a static HTML file
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'index.html'));
    });
  

    app.listen(3000, () => {
      console.log('Express server running on http://localhost:3001');
    });