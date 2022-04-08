const mongoose = require('mongoose')

dbname= 'myMongo'
mongoose.connect(`mongodb://localhost/${dbname}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(()=> {
        console.log(`you are connected to the ${dbname} database!`)
    })
    .catch((err) =>{
        console.log(`There was an error connecting to the ${dbname} database`)
        console.log(err);
    })
