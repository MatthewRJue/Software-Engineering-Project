const express = require("express")
const router = express.Router()

//get all admin
router.get("/administrators", (req, res) => {

})

//get specific admin
router.get("/administrators/:id", (req, res) => {
    const id = req.params.id

})

//update admin
router.put("/administrators/:id", (req, res) => {
    const id = req.params.id

})

//delete admin
router.delete("/administrators/:id", (req, res) => {
    const id = req.params.id

})

//gets all users
router.get("/users", (req, res) => {
    const userData = [{
        "data": "hello world"
    }]
   res.send(userData)
})

//get specific user
router.get("/users/:id", (req, res) => {
    const id = req.params.id

})

//post user
router.post("/users", (req,res) => {

})

//update user
router.put("/users/:id", (req, res) => {
    const id = req.params.id

})

//delete user
router.delete("/users/:id", (req, res) => {
    const id = req.params.id

})

//get all movies
router.get("/movies", (req, res) => {

})

//get specific movie
router.get("/movies/:id", (req, res) => {
    const id = req.params.id

})

//post movie
router.post("/movies", (req,res) => {

})

//update movie
router.put("/movies/:id", (req, res) => {
    const id = req.params.id

})

//delete movie
router.delete("/movies/:id", (req, res) => {
    const id = req.params.id

})

//get all promos
router.get("/promotions", (req, res) => {

})

//update promo
router.put("/promotions", (req, res) => {
    const id = req.params.id

})

//delete promo
router.delete("/promotions", (req, res) => {
    const id = req.params.id
    
})



module.exports = router