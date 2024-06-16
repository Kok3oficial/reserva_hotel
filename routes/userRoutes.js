const express = require('express');
const usuarioController = require('../controllers/controller');

const router = express.Router();

router.post("/usuario", usuarioController.createUser);
router.get('/usuario', usuarioController.getUsers);
router.get('/usuario/:id', usuarioController.getUserById);
router.put('/usuario/:id', usuarioController.updateUserById);
router.delete('/usuario/:id', usuarioController.deleteUserById);


module.exports = router;


// http:localhost:3000/api/usuario