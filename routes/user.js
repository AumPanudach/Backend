
const router = require("express").Router()
var users = [
    {
        id : 1,
        name : "Som",
        age : 18
    },
    {
        id : 2,
        name : "make",
        age : 20
    }
];

router.get('/',(req,res)=>{
      try{
        //throw new Error("value not found");
        res.status(200).json({
            message : "success",
            data : users
          });
      }catch(err){
        console.log('Error : ' + err.message);
      }
});

router.post('/',(req,res) => {
    let { name } = req.body
    let { age } = req.body    
    try{
           const user = {
            id : users.length + 1 ,
            name : name,
            age :age
           }

           users.push(user);

            res.status(200).json({
                message : "sucsecc",
                data : users
            })
        }catch(err){console.log(err.message);}
});

router.put('/:id',(req,res) => {
    
    try{
        
         const id = req.params.id
         const name = req.body.name
         const age = req.body.age

         for(let i = 0; i < users.length; i++){
            if(users[i].id == id ){
                users[i].name = name
                users[i].age = age
            }
         }
         res.status(200).json({
            message : "sucsecc",
            data : users
         })


       }catch(err){console.log(err.message);}
});

router.delete('/:id',(req,res) => {
    try{
      const id = req.params.id;
     for(let i = 0 ; i < users.length ; i++){
        if(users[i] == id){
            users = users.slice(i,1)
        }
     }   
     res.status(200).json({
        message  : "sucess",
        data : users
     })
    }catch(err){console.log(err.message);}
});

module.exports = router;