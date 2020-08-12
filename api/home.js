const marked = require('marked')
const fs = require('fs')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try{
        let path = __dirname + '/../README.md'
        fs.readFile(path, 'utf8', (err, data) => {
            if(err) {
            console.log(err)
            }
            res.send(marked(data.toString()))
        })
    }catch(err){
        res.status(400).json(err)
        console.error(err)
    }
})

module.exports = router