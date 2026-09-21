const EventEmitter = require('events');

const app = new EventEmitter();

// Click event
app.on('click', () => {
    console.log('Button clicked!');
});

// Login event
app.on('login', (username) => {
    console.log(`${username} logged in successfully.`);
});

// Submit event
app.on('submit', () => {
    console.log('Form submitted successfully.');
});

// Trigger events
app.emit('click');
app.emit('login', 'Ankit');
app.emit('submit');