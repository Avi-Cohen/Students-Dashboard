const router = require('express').Router()
const {getInfo, addInfo, getInfoId, addUpdate, deleteInfo} = require('../controllers/infoCtrl')

router.get('/', (req,res)=> {})
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