const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());


let users = [
  { 
    name : "Abdul",
    username : "abdul123",
    email : "abdul@gmail.com",
    password : "1234",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2hhbGlkIiwiZW1haWwiOiJhc2RmZ2giLCJ1c2VybmFtZSI6ImFiYzEyMyIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNjY1NzQ1Mzc1fQ.iApAnaaKY7y-sYIvFzFYzPB0LS2Y_r5K8vGZP6pPmiE"
  }
]

let mailing = [
    { id: 1, Name: 'Snow', Email: 'johndalton@gmail.com' },
    { id: 2, Name: 'Lannister', Email: 'caresi@gmail.com' }
]

app.get('/login', (req, res) => {
      res.status(200).send(users)
  });

app.post('/new-login',(req,res)=>{
    const newUser= req.body
    const newToken = jwt.sign(newUser,'ABCXYZ')
    newUser.token=newToken

    users=users.concat(newUser)
    console.log(users)
    res.json(newUser)
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/users',(req,res)=>{
  const userToken = req.body
  console.log(userToken)
  const findUser= users.find(user=> user.token === userToken)
  console.log(findUser)
  res.send(findUser)
});

app.get('/mailing',(req,res)=>{
  res.send(mailing)
});

app.post('/mailing',(req,res)=>{
  const newItem = req.body
  mailing = mailing.concat(newItem)
  res.send(mailing)
})

  app.listen(3001, () => console.log('Server is running on http://localhost:3001'));