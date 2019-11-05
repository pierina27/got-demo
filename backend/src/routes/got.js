var mongoosePaginate = require('mongoose-paginate-v2');
var express = require('express')
var router = express.Router()

let gotModel = require('../models/got.model')
let gotService = require('../services/got.service')

/** :populate: Will be 'populate', is use to load data into DB */
router.get('/got/:populate', (req, resp) => {
    if(req.params.populate === 'populate'){
        gotService.getCharactes().then((res) => {
            let got = res;
            for(let i=0; i<got.length; i++){
            let model = new gotModel({ 
                books: got[i].books,
                gender: got[i].gender,
                house: got[i].house,
                image:  got[i].image,
                name: got[i].name,
                slug: got[i].slug,
                rank: got[i].pagerank,
                titles: got[i].titles
                });

                model.save().then(doc => {
                    if(!doc || doc.length === 0) return res.status(500).send(doc);
                }).catch(err => { res.status(500),json(err) })
            } 
            resp.status(200).send("Process complete. Data was load.")
        }).catch(err => {
            resp.status(500).json(err)
        })

    } else {       
        return resp.status(400).send('Missing parameter: populate');
    }
})

/** route find all got characters in DB  */
router.get('/characters', (req, res) => {
    const { page, limit } = req.query;
    const options = { page: parseInt(page, 10) || 1, limit: parseInt(limit, 10) || 10 }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    gotModel.paginate({}, options).then(doc => {
        res.json(doc)  
    }).catch(err => {
        res.status(500).json(err)
    })
})

/** route find by id a got character in DB  */
router.get('/got/character/:id', (req, res, next) => {
    if(req.params.id){
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader('Content-Type', 'application/json');
        
        gotModel.findById({
            _id: req.params.id
        }, (err, doc, res) => { if(err) res.status(500).json(err) })
        .then(doc => {
            res.send(doc)
            next(doc)
        }).catch(err => {
            res.status(500).json(err)
        })
    } else {
        res.status(500).json("Missing required param")
    }
    
})

module.exports = router
