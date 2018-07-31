const express = require('express');
const app = express();

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
let port = 5000;

app.listen(port,()=>{
    console.log('server is up on:', port);
});

