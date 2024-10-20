const express = require('express')
const { getAllUsers, getAUser, addNewUser, updateUser } = require('../controller/userController')

const router = express.Router()

router.get('/users', getAllUsers)

router.get('/users/:id',getAUser)

router.post('/users', addNewUser)

router.put('/users/:id', updateUser)

module.exports = router