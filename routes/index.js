var express = require('express');
var router = express.Router();
var todoList = require("../database/model/todoList");
const path = require('path');

router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname,'../pages/index.html'));
});
/* GET home page. */
router.get('/get', function(req, res, next) {
    todoList.find({}).exec((err,data)=>{
        // res.render('index', { title: 'Express', arr:data });
        res.json({
            code:200,
            data
        })
    })
});

router.post('/add', function(req, res) {
    // console.log(req);
    let todo = req.body;
    todo.isDone= false;
    todoList.create(todo).then((data)=>{
            res.json({
                code:200,
                msg:"插入成功",
            })
        })
});

router.delete('/delete/:id', function(req, res) {
    let id= req.params.id;
    // console.log(id);
    todoList.remove({_id:id}).then((data)=>{
        res.json({
            code:200,
            msg:"删除成功",
        })
    })

});

router.patch('/update/:id', function(req, res) {
    let id= req.params.id;
    // console.log(req.params);
    let isDone =req.body.isDone==1? true:false;
    todoList.update({_id:id},{isDone}).then((data)=>{
        res.json({
            code:200,
            msg:"更新成功",
        })
    })

});
module.exports = router;
