import express from 'express';

const app = express();

// Adding json handling to the server
app.use(express.json());

app.get('/hello', (req, res) => {
    console.log('Received a get() on the path /hello')
    res.send("Hello from Express server!")
});

const users = [{
    'id': '123',
    'name': 'John Doe',
}, {
    'id': '124',
    'name': 'Jane Doe',
}];

// This will return all users
app.get('/users', (req, res) => {
    // load users data from "db"
    res.send(users);
})

// This will return specific user
app.get('/users/:id', (req, res) => {
    // load single user data from "db"
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);
    res.send(user);
});

// Post requests:
app.post('/users', (req, res) => {
    console.log(req.body);
    const newUser = req.body;
    users.push(newUser);
    res.send(users);
});

app.listen(3000, () => {
    console.log("Express server is listeing on port 3000");
});
