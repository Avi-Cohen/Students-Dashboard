const infoSchema = require('../model/infoModel')


exports.getInfo = async (req, res) => {
    const info = await infoSchema.find({})
    try {
        await info
        res.json(info)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

exports.addInfo = async (req, res) => {
    const { name, attendance } = req.body
    const newInfo = new infoSchema({
        name,
        attendance
    })
    try {
        await newInfo.save()
        res.json({ msg: "info added" })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

exports.getInfoId = async (req, res) => {
    const info = await infoSchema.findById(req.params.id)
    try {
        await info
        res.json(info)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

exports.addUpdate = async (req, res) => {
    const { name, attendance } = req.body
    try {
        await infoSchema.findByIdAndUpdate(req.params.id, {
            name,
            attendance
        })
        res.json({ msg: "student updated" })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

exports.deleteInfo = async (req, res) => {
    try {
        await infoSchema.findByIdAndDelete(req.params.id)
        res.json({ msg: 'student deleted' })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}