const router = require('express').Router()
const infoSchema = require('../model/infoModel')

// getting info data
router.get('/info', async(req, res)=>{ 
    const info = await infoSchema.find({})
    res.json(info)
 })

// posting info data
router.post('/info', async(req, res)=>{ 
    const {name, attendance} = req.body
    const newInfo= new infoSchema ({
        name,
        attendance
    })
    await newInfo.save()
    res.json({msg:"info added"})
 })
// getting specific info data
router.get('/info/:id', (req, res)=>{  })
// updating specific info data
router.put('/info/update/:id', (req,res)=>{  })
// deleting specific info data
router.delete('/info/:id', (req,res)=>{  })

module.exports = router