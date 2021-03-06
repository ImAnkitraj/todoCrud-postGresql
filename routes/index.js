const express = require('express') 
const router = express.Router()
const crudControllers = require('../controllers/crudControllers');

router.get('/', async function (req,res){

    const result = await crudControllers.getTodos();
    res.send(result)

})

router.get('/todo', async function(req,res){

    console.log(req.body)
    const id = parseInt(req.body.id)
    const result = await crudControllers.getTodo(id)
    res.send(result)

})

router.post('/add', async function(req,res){

    const title = req.body.title
    const result = await crudControllers.addTodo(title);
    res.send(result)

})

router.delete('/delete', async function(req,res){

    console.log('delete hit')
    const id = parseInt(req.body.id)
    const result = await crudControllers.deleteTodo(id);
    res.send(result)

})

router.put('/update', async function(req,res){

    const id = parseInt(req.body.id)
    const title = req.body.title
    const result = await crudControllers.updateTodo(id,title);
    res.send(result)

})


module.exports = router;
