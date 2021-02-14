const router = require('express').Router()
const infoSchema = require('../model/infoModel')

// getting info data
router.get('/info', async(req, res)=>{ 
    const info = await infoSchema.find({})
    try {
        await info
        res.json(info)
    } catch (err) {
        res.status(500).json({msg:err})
    }
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
router.get('/info/:id', async(req, res)=>{ 
    const info = await infoSchema.findById(req.params.id)
    try {
        await info
        res.json(info)
    } catch (err) {
        res.status(500).json({msg:err})
    }
 })

// updating specific info data
router.put('/info/update/:id', async(req,res)=>{ 
    const {name, attendance} = req.body
    try {
        await infoSchema.findByIdAndUpdate(req.params.id, {
           name,
            attendance
       })
       res.json({msg:"student updated"})    
    } catch (err) {
        res.status(500).json({msg:err})
    }
 })

// deleting specific info data
router.delete('/info/:id', async(req,res)=>{ 
    try {
        await infoSchema.findByIdAndDelete(req.params.id)
        res.json({msg:'student deleted'})
    } catch (err) {
        res.status(500).json({msg:err})
    }
 })

module.exports = router