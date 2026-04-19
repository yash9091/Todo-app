const express = require("express");

const router= express.Router();
const {getTodos, createTodo, updateTodo, deleteTodo}= require("../controllers/todo.controller");
const {validateTodo}= require("../middleware/vaidateTodo.middleware")
const auth= require("../middleware/auth.middleware")

router.get("/",getTodos)
router.post("/", auth, validateTodo, createTodo)
router.put("/:id", auth,updateTodo)
router.delete("/:id", auth,deleteTodo)


module.exports = router;