const router = require('express').Router()
const infoSchema = require('../model/infoModel')
const {getInfo, addInfo, getInfoId, addUpdate, deleteInfo} = require('../controllers/infoCtrl')

// getting info data
router.get('/info', getInfo)

// posting info data
router.post('/info', addInfo)

// getting specific info data
router.get('/info/:id', getInfoId)

// updating specific info data
router.put('/info/update/:id', addUpdate)

// deleting specific info data
router.delete('/info/:id', deleteInfo)

module.exports = router