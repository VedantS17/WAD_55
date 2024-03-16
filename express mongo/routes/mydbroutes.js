const express = require('express')
const router = express.Router()
const mydb = require('../models/mydb')

router.get('/' , async(req,res)=>{

    const data = await mydb.find()
    res.json(data)

})

router.get('/:name', async(req,res) =>{
    const data = await mydb.findOne({name:req.params.name})
    res.json(data)
})

router.post('/', async(req,res) => {
    const newdata = new mydb({
        name: req.body.name,
        tech : req.body.tech,
        sub: req.body.sub
    })

        const r = await newdata.save()
        res.json(r)
})
router.patch('/:id', async (req, res) => {
    try {
        const updatedData = await mydb.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const updatedData = await mydb.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const deletedData = await mydb.findOneAndDelete({ _id: req.params.id });
        if (!deletedData) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(deletedData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router

