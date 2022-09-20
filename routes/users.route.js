const express = require('express');
const router = express.Router();

let userSchema = require('../models/User')

router.route('/create-user').post((req, res) => {
  userSchema.create(req.body, (err, data) => {
    if (err){
      console.log(err)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

router.route('/').get((req, res) => {
  userSchema.find((err, data) => {
    if (err) {
      console.log(err)

    } else {
      res.json(data)
    }
  })
})

router.route('/get-user/:name').get((req,res) => {
  userSchema.find({name: req.params.name}).then((data) =>{
    res.json(data)
  })
  // studentSchema.findById(req.params.name).then((data) => {
  //   res.json(data)
  // })
})

router.route('/update-user/:id').put((req, res) => {
  userSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, data)=>{
    if (err) {
      console.log(err)
    } else {
      res.json(data)
      console.log('student updated successfully!')
    }
  })
})

router.route('/delete-user/:id').delete((req, res) => {
  userSchema.findByIdAndRemove(req.params.id, (err,data) => {
    if (err) {
      console.log(err)
    } else {
      res.status(200).json({msg: data})
    }
  })
})

module.exports = router;