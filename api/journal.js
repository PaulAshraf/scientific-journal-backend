const express = require('express')
const router = express.Router()

const { getJournals, addJournal } = require('../loaders/mongo')

router.get('/:id', async (req, res) => {
    
    const id = req.params.id

    try{
        let data = await getJournals(id)
        res.status(200).json(data)
    }catch(err){
        res.status(400).json(err)
        console.error(err)
    }
})

router.post('/', async (req, res) => {
    
    const body = req.body

    try{
        let data = await addJournal(body)
        res.status(200).json(data)
    }catch(err){
        res.status(400).json(err)
        console.error(err)
    }
})

module.exports = router