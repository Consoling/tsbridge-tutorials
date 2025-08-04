const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 3654;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        origin: '*', 
        methods: ['GET', 'POST'], 
        allowedHeaders: ['Content-Type', 'Authorization'] // Allow specific headers
    }
))

app.use(morgan('dev'));

app.get('/api/home', (req, res) => {
    res.send('Hello from the home page!');
    console.log('Received data:', req);
})

app.post('/api/data', async(req, res) => {
    console.log('Received data:', req.body);
    const {email, password} = await req.body
    if(!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }
    res.json({ message: 'Data received successfully!' });
})

// cors - cross origin resource sharing

app.listen(port, (error) => {
    if (error) {
        console.error('Error starting the server:', error);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
})




// Login Form

// 1. Email
// 2. Password