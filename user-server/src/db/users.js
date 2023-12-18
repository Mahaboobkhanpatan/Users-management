import { getConnection } from "./db.js";
import express from "express"
import {app} from "../../user-server.js"

export default function (){
    app.use( express.json())

    let connection = getConnection()
    connection.connect();
    app.post("/addusers",(req,response)=>{
        console.log("url hits")
        let body=req.body
      connection.query(`INSERT INTO  USERS (FIRST_NAME, LAST_NAME, EMAIL_ID,MOBILE_NO, ADDRESS_1,ADDRESS_2, CITY, STATE, COUNTRY, ZIP_CODE )VALUES ( '${body.firstName}','${body.lastName}','${body.email}','${body.mobile}','${body.address1}','${body.address2}','${body.city}','${body.state}','${body.country}','${body.zip_code}'

      )`,(err,result)=>{if (err)console.log(err)
        

        else response.send({status:true, message: "Sucessfully inserted"});
    
    }
      
      
      )
        
    })
}

