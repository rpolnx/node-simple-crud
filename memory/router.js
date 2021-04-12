const express = require('express')
const router = express.Router()

const service = require('./memory.service')

const util = require('../util')

router.get('/user', async (req, res) => {
    const data = await service.getAll()
    res.status(200).json(data)
})

router.get('/user/:id', async (req, res) => {
    try {
        const data = await service.get(req.params.id)
        res.status(200).json(data)
    } catch (e) {
        res.status(404).json({ ...(util.generateDefaultError(req, 404)), "message": e.message })
    }
})

router.post('/user', async (req, res) => {
    const data = await service.create(req.body)
    res.status(201).json(data)
})

router.put('/user/:id', async (req, res) => {
    const data = await service.update(req.body, req.params.id)
    res.status(201).json(data)
})

router.delete('/user/:id', async (req, res) => {
    try {
        const data = await service.deleteById(req.params.id)
        res.status(204).json(data)
    } catch (e) {
        res.status(404).json({ ...(util.generateDefaultError(req, 404)), "message": e.message })
    }
})

module.exports = router