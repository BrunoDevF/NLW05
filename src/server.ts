import express from 'express';

const app = express();

app.get('/nlw', (req, res) => {
    return res.json({'message': "Ola NLW, estou aprendendo NodeJS e estou muito feliz com isso!!!!!!! :DDDDDDDDDD"});
})

app.post('/user', (req, res) => {
    return res.json({'message': "Ola NLW, estou aprendendo NodeJS e estou muito feliz com isso! :D"});
});





app.listen(3333, () => {
    console.log("Server is running on port 3333");
});

