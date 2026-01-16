const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index', { title: 'Forðsíða'});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Um okkur'});
});

app.use((req, res) =>{
    res.status(404).send('Síða fannst ekki (404)');
});

app.listen(PORT, () => {
    console.log(`Server keyrir á http://localhost:${PORT}`);
});