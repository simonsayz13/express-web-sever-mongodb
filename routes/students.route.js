const express = require('express');
const router = express.Router();

let studentSchema = require('../models/Student')

router.route('/create-student').post((req, res, next) => {
  studentSchema.create(req.body, (err, data) => {
    if (err){
      console.log(err)
      return next(err)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

router.route('/').get((req, res, next) => {
  studentSchema.find((err, data) => {
    if (err) {
      console.log(err)
      return next(err)
    } else {
      res.json(data)
    }
  })
})

router.route('/update-student/:id').put((req, res, next) => {
  studentSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, data)=>{
    if (err) {
      console.log(err)
      return next(err)
    } else {
      res.json(data)
      console.log('student updated successfully!')
    }
  })
})

router.route('/delete-student/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (err,data) => {
    if (err) {
      console.log(err)
      return next(err)
    } else {
      res.status(200).json({msg: data})
    }
  })
})

module.exports = router;