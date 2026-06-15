const express = require('express');
const app = express();

const PORT = 3000;  

app.get('/', (req, res) => {
    res.send('PiggyCat API');
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});