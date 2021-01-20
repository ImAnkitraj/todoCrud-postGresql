const client = require('../db')

const getTodos = () => {

    const getTodosQuery = 'SELECT * FROM todos';
    return client.query(getTodosQuery)
    .then(res=>{
        console.log(res)
        return res.rows
    })
    .catch(err=>{
        console.log(err)
        return err
    })

}   

const getTodo = (id) => {
    const getTodoQuery = 'SELECT * FROM todos WHERE id = $1';
    return client.query(getTodoQuery,[id])
    .then(res=>{
        console.log(res)
        return res.rows
    })
    .catch(err=>{
        console.log(err)
        return err
    })
}

const addTodo = (title) => {

    const addTodoQuery = 'INSERT INTO todos (title) VALUES ($1) RETURNING  *'
    return client.query(addTodoQuery,[title])
    .then(res=>{
        console.log(res)
        return res.rows
    })
    .catch(err=>{
        console.log(err)
        return err;
    });

}

const deleteTodo = (id) => {
    const deleteTodoQuery = `DELETE FROM todos WHERE id = $1 RETURNING *`
    return client.query(deleteTodoQuery,[id])
    .then(res=>{
        console.log(res)
        return res.rows
    })
    .catch(err=>{
        console.log(err)
        return err;
    });
}

const updateTodo = async (id, title) => {
    const updateTodoQuery = `UPDATE todos SET title = $1 WHERE id = $2 RETURNING *`
    return client.query(updateTodoQuery, [title, id])
    .then(res=>{
        console.log(res)
        return res.rows
    })
    .catch(err=>{
        console.log(err)
        return err;
    });
}

module.exports = {
    addTodo,
    deleteTodo,
    updateTodo,
    getTodo,
    getTodos
}