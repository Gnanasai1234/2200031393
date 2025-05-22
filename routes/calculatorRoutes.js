const calculatorController=require('./controllers/calculatorController')
const express=require('express')
const calculatorRouter=express.Router()

calculatorRouter.post('/primes:p',calculatorController.primenumbers)
calculatorRouter.post('/fibo:f',calculatorController.fibonacci)
calculatorRouter.post('/rand:r',calculatorController.randomnumbers)
calculatorRouter.post('/even:e',calculatorController.evennumbers)