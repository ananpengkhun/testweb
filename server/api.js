const express = require("express")
const router = express.Router()
const mongoClient = require('mongodb').MongoClient
const mongo_string = "mongodb://localhost:27017"

router.get('/show',function (req,res) {
  //res.end("api men kub")  
  mongoClient.connect(mongo_string,function (req,db) {
    var a = db.db('cmcourse')
    a.collection('course')
        .find()
        .toArray()
        .then( coruse => { 
            const output = {result : "ok" , message : coruse}
            res.json(output)
        })
        db.close()
  })
})

router.post('/add',function (req,res) {
    // res.end("add api data" + req.body.name)
    mongoClient.connect(mongo_string,function (err,db) {
        const data = { name : req.body.name }
        var a = db.db('cmcourse')
        a.collection('course')
        .insertOne(data,(err,result) => {
            if(err) throw err
            const responseMsg = { result : 'ok' , message : result.result.n + "Inserted" }
            res.json(responseMsg)
        })
        db.close()
    })
})

router.delete('/delete/:name',function (req,res) {
    // res.end("delete api data " + req.params.name)
    var query = { name : req.params.name }
    mongoClient.connect(mongo_string,function (err,db) {
        var a = db.db('cmcourse')
        a.collection('course').deleteMany(query,function (err,result) {
            const responseMsg = { result : 'ok' , message : result.result.n + "Delete" }
            res.json(responseMsg)
        })
    })
})

module.exports = router