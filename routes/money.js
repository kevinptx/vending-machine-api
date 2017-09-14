const express = require("express")
const router = express.Router()
const models = require("../models")

//get to find current total money in the vending machine
router.get("/api/vendor/money", function(req, res){
  models.money.findAll()
  .then(function(money){
    res.json(money);
  })
})

//get to find current running count of money in the vending machine
router.get("/api/vendor/money/count", function(req, res){
  models.moneycounter.findAll()
  .then(function(moneyCount){
    res.json(moneyCount);
  })
})


//post to post new money to the vending machine
router.post("/api/vendor/money", function(req, res){
  const newMoney = models.money.build({
    machine: req.body.machine
  })
  newMoney.save()
  .then(function(money){
    res.json({success:true})
  })
})

//put to update current money in the vending machine
router.put("/api/vendor/money/:itemId", function(req, res){
  models.money.find({
    where: {
      id: req.params.itemId
    }
  })
  .then(function(money){
    money.machine = req.body.machine
    money.save()
    .then(function(money){
      res.json({money:money})
    })
  })
  .catch(function (error){
    res.status(404).json({errorMessage: "ERROR"})
  })
})

module.exports = router
