import express from "express";  
 import * as controller from '../controller/menuController.js'            

 const router = express.Router()

 router.post('/',controller.getPizza)
 router.post('/halfnhalf',controller.getPizza)

 export default router