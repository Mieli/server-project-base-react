const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/api/v1/authenticate', (req, res, next) => {
    console.log(req.body);
    const {email, senha} = req.body;

    if(email === 'teste@teste.com.br' && senha === '123456'){
        res.status(200).json({
            userName: "Mieli",
            token: "asdfqwertbvc5672dfgdfg89"
        });
    }else {
        res.sendStatus(401);
    }
});

module.exports = app;