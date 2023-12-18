import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios"
import './displayUser.css'


function DisplayUser() {


  const [users,setUsers]=useState([]);
  const [dataFilter,setDataFilter]=useState();
  
    function displayUser(){

        axios.get('http://localhost:5000/getusers/')
        .then((res)=>setUsers(res.data)).catch((error)=>console.log(error))
        

    }
    displayUser();

    function deleteStudent(event) {
      const id = event.target.value;
      console.log(id);
      axios.delete(`http://localhost:5000/delete/${id}`).then(result => {
        displayUser();
          
      }).catch(error => console.error(error));
  }
  function editUsers(event){
    const filterData=event.target.value;
    setDataFilter(filterData[0])
    console.log(filterData + "this is data to pass ")
    
  }
  return (
    <div>

        <div className='main-container'> 
                
                <h1 className='users-list'>Users List</h1>
                <Link to="/"><button className='create-list-btn'>create user</button> </Link>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>user id</th>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>Email</th>
                      <th>Mobile No</th>
                      <th>Address 1</th>
                      <th>Address 2</th>
                      <th>Country</th>
                      <th>State</th>
                      <th>City</th>
                      <th>Zip Code</th>
                      <th>Edit</th>
                      <th>Delete</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((data,index)=>{
                      return(
                        <tr key={index}>
                          <td>{data.USER_ID}</td>

                          <td>{data.FIRST_NAME}</td>
                          <td>{data.LAST_NAME}</td>
                          <td>{data.EMAIL_ID}</td>
                          <td>{data.MOBILE_NO}</td>
                          <td>{data.ADDRESS_1}</td>
                          <td>{data.ADDRESS_2}</td>
                          <td>{data.CITY}</td>
                          <td>{data.STATE}</td>
                          <td>{data.COUNTRY}</td>
                          <td>{data.ZIP_CODE}</td>
                          <td>
                           <Link to="/update"><button className='edit-button' onClick={editUsers} value={data.user_id} >Edit</button> </Link>                        
                          </td>
                          <td>
                          <button className='delete-button' value={data.user_id} onClick={deleteStudent}>Delete</button>
                          </td>


                        </tr>
                      )
                    })}
                  </tbody>
              </table>
              <div>
                {dataFilter!==""?<DisplayUser data={dataFilter} users={displayUser} clear={setDataFilter}/>:""}
              </div>
           
        </div>
        <div>
        
        </div>
        
    
    </div>
  )
}

export default DisplayUser
