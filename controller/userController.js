const store = require('../store')

let users = store.user

const getAllUsers=(req,res,next)=>{
  res.status(200).json({data:users})
}

const getAUser=(req,res,next)=>{
  console.log(req.params);
  let singleUser=''
  const userId=parseInt(req.params.id)
  for (let i = 0; i < users.length; i++) {
    if(users[i].id===userId){
      singleUser=users[i]
    }
  }
  res.status(200).json(singleUser)
}

const addNewUser=(req,res,next)=>{
  console.log(req.body);
  users.push(req.body)
  res.status(200).json(users)
}

const updateUser=(req,res,next)=>{
  console.log(req.params);
  const userId=parseInt(req.params.id)
  const updatedData = req.body
  for (let i = 0; i < users.length; i++) {
    if(users[i].id===userId) {
      users[i]={...users[i],...updatedData}
    }
  }
  res.status(200).json({user:users[i]})
}

module.exports = {getAllUsers,getAUser,addNewUser,updateUser}