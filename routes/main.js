/*********GENERAL ROUTES*************/
//Route to direct user to home page//

const express =  require('express')
const router = express.Router();

router.get('/',(req,res)=>
{
    res.render('home')
})


module.exports = router;