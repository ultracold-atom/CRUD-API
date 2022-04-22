import { v4 as uuidv4 } from 'uuid';
uuidv4();

let users = []

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuidv4()});
    
    console.log(`User [${user.firstName}] added to the database.`);
};

export const getUsers = (req,res)=>{
    res.send(users)
  }

export const getUser = (req,res)=>{
    const {id} = req.params
    const foundUser = users.find((user) => user.id ==id)
    res.send(foundUser)
}

export const deleteUser = (req,res)=>{
    const {id} = req.params
    users = users.filter((user)=>{user.id !== req.params.id})
    res.send(`ID with ${id} is deleted from the database`)
}

export const updateUser = (req,res)=>{
    const {id} = req.params
    const { firstName,lastName,age} = req.body
    const user = users.find((user)=>{user.id == req.params.id})

    if(firstName){
        user.firstName = firstName
    }
    if(lastName){
        user.lastName = lastName
    }
    if(age){
        user.age = age
    }

    res.send(`ID with ${id} is updated`)    
}