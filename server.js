require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// import routes
const infoRoute = require('./routes/infoRoute')

const app = express()

const URI = process.env.MONGO_URL

// connect to mongo
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}, (err) => {
    if(err) throw err;
    else {
        return console.log('mongo db is connectet' );
        
    }
})

// middleware
app.use(cors())
app.use(express.json())

app.use('/', infoRoute)

const PORT = process.env.PORT 

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})