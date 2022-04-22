import express from "express";
import {getUser,getUsers,createUser,deleteUser,updateUser} from '../controller/users.js'

const router = express.Router()


router.get('/',getUsers)

router.post('/',createUser)

router.get('/:id',getUser)

router.delete('/:id',deleteUser)

router.patch('/:id',updateUser)


export default router