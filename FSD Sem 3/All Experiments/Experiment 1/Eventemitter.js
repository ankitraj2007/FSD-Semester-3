const EventEmitter = require('events');

const emitter = new EventEmitter();

// Event for greet
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js.`);
});

// Event for exit
emitter.on('exit', () => {
    console.log("Exit event triggered.");
});

// Trigger events
emitter.emit('greet', 'Ankit');
emitter.emit('exit');