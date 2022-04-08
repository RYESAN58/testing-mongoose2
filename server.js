const express = require('express')
const app = express();

require('./config/mongoose.config')


app.use(express.json(),express.urlencoded({extended: true}));



const AllMyUserRoutes = require('./routes/animal.routes');
AllMyUserRoutes(app)


const portNumber = 8000;


app.listen(portNumber, () => console.log(`Server connected on port ${portNumber}`))