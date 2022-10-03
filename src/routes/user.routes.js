const router = require('express').Router();

const conection = require('../../database/conection');
const {getUser, postUser, putUser, deleteUser} = require('../controllers/user.controllers')

router.get('/user', getUser);

router.post('/user', postUser);

router.put('/user/:id', putUser);

router.delete('/user/:id', deleteUser);



router.get('/', async (req, res)=>{
    let sql = "SELECT * from usuarios";

    await conection.connect(sql, (err, row)=>{
        if(!err){res.json(row)}else{console.log(err);}
    })
})

module.exports = router