import  express from 'express'
import { app } from '../../user-server.js'
import { getConnection } from './db.js'


export default function getUsers(){

    app.use(express.json());
    const connection = getConnection();
    connection.connect();

    app.get('/getusers/',(req,res)=>{
        connection.query(`select * from users`, (error,result)=>{
            if(error){
                console.log(error)
                res.send({message:"could not get user"},{status:false})
            }else{
                res.send(result? result : error)
            }
        })
    })

    app.get('/getusers/:userId',(req,res)=>{
        const userId=req.params.userId;
        console.log("url hits")
        connection.query(`select* from users where user_id=${userId}`,(error,result)=>{
            if(error){
                console.log(error)
                res.send({message:"could get users"},{status:false})
            }else{
                res.send(result ? result : error)
            }
        })
    })
}