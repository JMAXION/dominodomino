import express from 'express'
import * as controller from '../controller/testController.js'

const router = express.Router()

router.get('/',controller.getTest)
router.get('/:id',controller.getTest)

console.log("테스트123s");
export default router