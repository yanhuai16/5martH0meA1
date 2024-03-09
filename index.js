const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to SmartHomeAI! Our home automation app provides a centralized system to control lighting, climate, security, and entertainment devices.');
});

// Define route for the lighting control page
app.get('/lighting-control', (req, res) => {
  res.send('Control your home lighting with ease using our SmartHomeAI app. Our AI algorithms learn from your habits to create the perfect ambiance and enhance energy efficiency.');
});

// Define route for the climate control page
app.get('/climate-control', (req, res) => {
  res.send('Set the perfect temperature for your home with our SmartHomeAI app. Our AI algorithms learn from your habits to create a comfortable and energy-efficient environment.');
});

// Define route for the security page
app.get('/security', (req, res) => {
  res.send('Protect your home with our SmartHomeAI app. Our AI algorithms learn from your habits to create a secure environment that adapts to your needs.');
});

// Define route for the entertainment page
app.get('/entertainment', (req, res) => {
  res.send('Enjoy your favorite entertainment with our SmartHomeAI app. Our AI algorithms learn from your habits to create a personalized experience that enhances your viewing and listening pleasure.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});