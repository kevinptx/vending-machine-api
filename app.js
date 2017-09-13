const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())

const item = require("./routes/items")
app.use(item)

const update = require("./routes/update")
app.use(update)

const purchase = require("./routes/purchase")
app.use(purchase)

const money = require("./routes/money")
app.use(money)

app.listen(3000, function(req, res){
  console.log("Vending Works!");
})
