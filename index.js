const a=require("express");
const app=a()
const apiRouter = require("./server/index.js");
const puerto=3001

app.use(a.json())

app.get('/',(req,res)=>{
    res.send("js es una basura")
    
});

apiRouter(app)

app.listen(puerto,(req,res)=>{
    console.log(`Java es mejor que esta basura, puerto: ${puerto}`)
    
})

app.get('/aea/:id',(req,res)=>{
    const {id:idea}=req.params
    console.log("asfas:",idea)
    res.json([
  { id: 1, nombre: 'Ana' },
  { id: idea, nombre: 'Carlos' }
])
})
