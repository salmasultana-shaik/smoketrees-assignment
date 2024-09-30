const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const User = require('./models/User');
const Address = require('./models/Address');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' folder

// Serve the index.html file on root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Sync the database and create tables
sequelize.sync({ force: false })  // Set to true if you want to reset the tables
    .then(() => console.log('Database synced'))
    .catch(err => console.log('Error: ' + err));

// Route to handle user and address registration
app.post('/register', async (req, res) => {
    const { name, street, city, state, zip } = req.body;

    try {
        // Create a new user
        const user = await User.create({ name });

        // Create the address and associate it with the user
        const address = await Address.create({ street, city, state, zip, UserId: user.id });

        res.status(200).json({ message: 'User and address created successfully', user, address });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred', details: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
