import { getConnection } from "./db.js";
import express from "express"
import {app} from "../../user-server.js"



export default function update(){
    app.use( express.json())

    let connection = getConnection()
    connection.connect();
app.put("/updateUser/:userId", (req, response) => {
    console.log("url hits")
    const userId = req.params.userId;
    const body = req.body;

    connection.query(
      `UPDATE users SET  first_name='${body.fName}',last_name='${body.lName}', email_id='${body.email}', mobile_no='${body.phone}',address_1='${body.address1}',address_2='${body.address2}',city='${body.city}',state='${body.state}',country='${body.country},zip_code'${body.zip_code}'' WHERE user_id='${userId}'`,
      (err, result) => {
        if (err) {
          response.send(err);
          console.log(err);
        } else {
          if (result.affectedRows > 0) {
            response.send({ status: true, message: "Successfully updated" });
            console.log("Successfully Updated!!!");
          } else {
            response.send({ status: false, message: "User not found or no changes made" });
            console.log("User not found or no changes made");
          }
        }
      }
    );
  });
}