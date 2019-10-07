const express = require('express');
const mc = require('./controllers/messages_controller');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', mc.read);

app.post('/api/messages', mc.create);

app.put('/api/messages/:id', mc.update);
// app.put('/api/messages/:id/:newText', mc.update);

app.delete('/api/messages/:id', mc.delete);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Running in Port: ${PORT}`)
})