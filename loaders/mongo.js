
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID

const { mongoPassword } = require('../config')

const uri = `mongodb+srv://PaulAshraf:${mongoPassword}@scientific-journal.o1jnn.mongodb.net/test?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

let journals = null

const connectMongo = () => {
    
    client.connect(err => {
        
        if(err){
            console.error(err)
            return
        }
        
        journals = client.db('test').collection('journals')
        console.log('✅ Connected to MongoDB')
        return journals
    })

}

const getJournals = async (id) => {
    const journal = await journals.findOne({_id: ObjectID(id)})
    if(journal)
        return journal
    else
        throw {error: `Could not find a journal with id = ${id}`, id: id}
}

const addJournal = async (body) => {
    const res = await journals.insertOne(body)
    if(res)
        return {id: res.insertedId}
    else
        throw {error: `Could not insert journal`}
}

module.exports = { connectMongo, getJournals, addJournal }
