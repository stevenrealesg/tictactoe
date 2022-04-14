const express = require('express')
const morgan = require('morgan')
const app = express()
const dotenv = require('dotenv');
const cors = require('cors');
const routeHistory = require('./routes/history.route')

dotenv.config();
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.get('/', (req, res) => {
    res.status(200).send('Server online!')
})

app.use('/history', routeHistory)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
  })