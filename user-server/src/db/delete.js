import  express  from "express";
import { app } from "../../user-server.js";
import { getConnection } from "./db.js";


export default function del(){
    app.use(express.json())

    let connection=getConnection()

    connection.connect();


    app.delete("/delete/:userId",(req,res)=>{
        const user=req.params.userId
        connection.query(`DELETE FROM  USERS WHERE USER_ID='${user}'`,(error,result)=>{
            if(error){
                console.log(error)
                res.send({message:"unsuccessfull ", status:false})
            }else{
                res.send({message:"successfully deleted", status:true})
            }
        })
    })

    
}