require('dotenv').config({})

const express = require('express')
const app = express()

const morgan = require('morgan')
app.use(morgan('dev'))

app.use(express.json())

const memoryRouter = require('./memory/router')
const redisRouter = require('./redis/router')
const pgRouter = require('./pg/router')

app.use("/memory", memoryRouter)
app.use("/redis", redisRouter)
app.use("/postgres", pgRouter)

const PORT = process.env.SERVICE_PORT

app.listen(PORT, () => {
    console.log(`Service started at port: ${PORT}`)
})