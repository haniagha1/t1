const express = require('express')
const app = express()
const port = 3000
var fs = require('fs');


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/', (req, res) =>{
    x=req.query.projects
    console.log(x)
    fs.writeFile("./static/project.txt",x,(err)=>{
        console.log(err)
    })
    res.sendFile(req.path, { root: 'static' })
})

app.post('/project/:id',(req,res)=>{
    console.log(req.body)
    res.send(JSON.stringify("your project ID is "+ req.params.id))
    
})
app.use(express.static('static'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))