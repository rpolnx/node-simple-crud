const express = require('express')
const router = express.Router()

const service = require('../pg/pg.service')

router.get('/user', async (req, res) => {
    const data = await service.getAll()
    res.status(200).json(data)
})

router.get('/user/:id', async (req, res) => {
    const data = await service.get(req.params.id)
    res.status(200).json(data)
})

router.post('/user', async (req, res) => {
    const data = await service.create(req.body)
    res.status(201).json(data)
})

router.put('/user/:id', async (req, res) => {
    const data = await service.update()
    res.status(204).json(data)
})

router.delete('/user/:id', async (req, res) => {
    const data = await service.deleteById(req.params.id)
    res.status(204).json(data)
})

module.exports = router