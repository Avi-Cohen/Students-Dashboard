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
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
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

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})