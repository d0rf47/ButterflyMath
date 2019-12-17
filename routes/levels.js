//***********Level Routes**********//
const express =  require('express')
const router = express.Router();

router.get('/addition', (req,res)=>
{
    res.render('addition')
})

router.get('/subtraction', (req,res)=>
{
    res.render('subtraction')
})

router.get('/division', (req,res)=>
{
    res.render('division')
})
module.exports = router;