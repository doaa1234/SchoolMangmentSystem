const express = require('express');
const httpApp = express();


const students = [
    {name: 'motaz',id : 1},
    {name: 'doaa',id : 2},
    {name: 'ruba',id : 3}
]

http://localhost:3000/students

httpApp.get('/students', ali);
httpApp.get('/', (req, res)=>{
    res.send("hello i'm doaa ");
});


function ali(request, response)
{
    response.status(200).send(students);
}



httpApp.listen(3000, ()=>{
    console.log('http server runnitng on http:localhost:3000');
})