import { io } from 'socket.io-client';
import { colorfulLog } from 'colorful-log-dk';

const createSocketClient = (name, interval) => {
    const socket = io('http://localhost:8000/');

    socket.on('connect', () => {
        colorfulLog(`${name} is connected!`);

        setInterval(() => {
            // const randomNumber = Math.ceil(Math.random() * 100);            
            // socket.emit('newNumber', `Here's the random number: ${randomNumber}`);
            socket.emit('message', `Hello from ${name}`);
        }, interval);
    });

    socket.on('disconnect', () => {
        colorfulLog(`${name} is disconnected`);
    });
}

createSocketClient('Clinet server 1', 2000);
createSocketClient('Clinet server 2', 5000);