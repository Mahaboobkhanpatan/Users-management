import express from 'express'
import  mysql  from 'mysql'
import cors from 'cors'
import users from './src/db/users.js';
import update from './src/db/update.js'
import del from './src/db/delete.js'
import getUsers from './src/db/getUsers.js';
// import {api }from '../src/api.js'

 export const app =express();
app.use(cors());

app.listen(5000,()=>{
    console.log("listening")


})
users();
update();
del();
getUsers();