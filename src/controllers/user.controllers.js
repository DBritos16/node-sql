const Ctrl = {};
const conection = require("../../database/conection");


Ctrl.getUser = async (req, res)=>{
    let sql = 'SELECT * from  users'
    await conection.query(sql, (err, rows)=>{
        (!err)?res.json(rows):console.log(err);;
    })
}

Ctrl.postUser = async (req, res)=>{
    const {nombre, apellido, edad} = req.body;

    let sql = 'INSERT INTO `users` (`id_user`, `nombre`, `apellido`, `edad`) VALUES ' + `(NULL, '${nombre}', '${apellido}', '${edad}')`;

    await conection.query(sql, (err, rows)=>{
        (!err)?res.json('Usuario creado!'):console.log(err);;
    })
}

Ctrl.putUser = async (req, res)=>{
    const id = req.params.id;
    const {nombre, apellido, edad} = req.body;

    let sql = "UPDATE `users` SET `nombre` = '"+nombre+"', `apellido` = '"+apellido+"', `edad` = '"+edad+"' WHERE `users`.`id_user` = "+id+";"

    await conection.query(sql, (err, rows)=>{
        (!err)?res.json('Usuario actualizado!'):console.log(err);;
    })
}

Ctrl.deleteUser = async (req, res)=>{
    const id = req.params.id;

    let sql = "DELETE FROM `users` WHERE users.id_user = "+id+"";

    await conection.query(sql, (err, rows)=>{
        (!err)?res.json('Usuario eliminado!'):console.log(err);;
    })
}

module.exports = Ctrl