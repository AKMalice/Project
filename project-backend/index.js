const express = require('express');
const jwt = require('jsonwebtoken')
const User = require('./user')
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());


let mailing = [
    { id: 1, Name: 'Snow', Email: 'johndalton@gmail.com' },
    { id: 2, Name: 'Lannister', Email: 'caresi@gmail.com' }
]

app.get('/login', (req, res) => {
  User.find({}).then(result=>{
    res.json(result)
  })
  });

app.post('/new-login',(req,res)=>{
    const body= req.body
    const newToken = jwt.sign(req.body,'ABCXYZ')
   
    const user= new User({
    name : body.name,
    username : body.username,
    email : body.email,
    password :body.password,
    token : newToken,
    mailing : []
})

    user.save().then(savedUser=>{
      res.json(savedUser)
    }).catch(error=> console.log(error))
});

app.get('/users', (req, res) => {
  User.find({}).then(result=>{
    res.json(result)
  })
});

app.put('/mailing',(req,res)=>{
  const user = req.body
  User.findByIdAndUpdate(user.id,user, { new: true }).then(result=>{
    res.send(user.mailing)
  })
})

  app.listen(3001, () => console.log('Server is running on http://localhost:3001'));