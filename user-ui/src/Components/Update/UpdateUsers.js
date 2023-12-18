// import React, { useEffect, useState } from 'react'
// import './updateUsers.css'
// import axios from "axios"
// import { Link } from 'react-router-dom'



// function UpdateUsers(props) {

  
//   const [userData, setUserData] = useState({
//     firstName: props.data.FIRST_NAME,
//     lastName: props.data.LAST_NAME,
//     email:props.data.EMAIL_ID ,
//     mobileNo: props.data.MOBILE_NO,
//     address1: props.data.ADDRESS1,
//     address2: props.data.ADDRESS2,
//     country: props.data.COUNTRY,
//     state: props.data.STATE,
//     city: props.data.CITY,
//     zipCode: props.data.ZIP_CODE
//   });
//     console.log(userData);
    
//       // Fetch user data using the API endpoint
      
  
//   const handleChange=(e)=>{
//     setUserData({...userData,[e.target.name]:e.target.value})
//     setErrors({...errors, [e.target.name]:""})  
//   }
//   const [countries,setCountries]=useState([]);
//   useEffect(() => {
//     axios
//       .get(
//         'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
//       )
//       .then((response) => {
//         const uniqueCountries = Array.from(
//           new Set(response.data.map((country) => country.country))
//         ).map((countryName) => {
//           return response.data.find(
//             (country) => country.country === countryName
//           );
//         });
        
//         setCountries(uniqueCountries);
//       });
//   }, []);  
//   const [errors,setErrors]=useState({
//     firstName:"",
//     lastName:"",
//     email:"",
//     mobileNo:"",
//     address1:"",
//     address2:"",
//     city:"",
//     state:"",
//     country:"",
//     zipCode:""
//   });

  
//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { ...errors };
//     if (userData.firstName.trim() === "") {
//       newErrors.firstName = 'firstname mandatory';
//       isValid = false;
//     }
//     else if (userData.firstName.length<5) {
//       newErrors.firstName = 'firstname at least 5 characters';
//       isValid = false;
//     }
//     if (userData.lastName.trim() ==="") {
//       newErrors.lastName = 'lastname mandatory';
//       isValid = false;
//     }else if(userData.lastName.length<5){
//       newErrors.lastName = 'lastname at least 5 characters';
//       isValid = false;
//     }
//     if (userData.email.trim()==="") {
//       newErrors.email = 'email mandatory';
//       isValid = false;
//     }
//     if(userData.address1.trim()===""){
//       newErrors.address1="address1 mandatory"
//       isValid=false;

//     }
//     if(userData.mobileNo.trim()===""){
//       newErrors.mobileNo="mobile no mandatory"
//       isValid=false;

//     }
//     if(userData.city.trim()===""){
//       newErrors.city=" city mandatory"
//       isValid=false;

//     }
//     if(userData.zipCode.trim()===""){
//       newErrors.zipCode=" zipcode mandatory"
//       isValid=false;

//     }
//     setErrors(newErrors);
//     return isValid;
//   };
//   const submitHandler=(e)=>{
//     e.preventDefault() 
//     if (validateForm()) {
//       console.log('Form is valid, submitting:', userData);
     
//     } else {
//       console.log('Form has errors, please fix them.');
//     } 

//     // axios.put(`http://localhost:5000/school/update/:${user_id}`, {
//     //         'firstName': userData.firstName,
//     //         "lastName": userData.lastName,
//     //         "email": userData.email,
//     //             "mobileNo": userData.mobileNo,
//     //             "address1": userData.address1,
//     //             "address2": userData.address2,
//     //             "country": userData.country,
//     //             "state": userData.state,
//     //             "city": userData.city
            
//     //     }).then(result => {
//     //         setuserData({ ...userData });
//     //         props.schools()
//     //         props.clear(null)
//     //     }).catch(error => {
//     //         // alert("Error handled")
//     //         console.log(error)
//     //     })
    
//   }
//   return (
//      <div className='main-container'>
//        <div className='form-container'>
//           <h1 className='heading'>update user</h1>
//           <div className='form-data'>
//             <form onSubmit={(event) => event.preventDefault()} className='form-data'>
//                <div className='input-field'>
//                 <label htmlFor='firstName'>First Name</label><br/>
//                 {errors.firstName && <p className='error_msg'>{errors.firstName}</p> }
//                 <input type='text' name='firstName' onChange={handleChange} placeholder='enter name*'/>
//               </div>
//               <div className='input-field'>
//                <label htmlFor='lastName'>Last Name</label><br/>
//                {errors.lastName && <p className='error_msg'>{errors.lastName}</p> }
//                <input type='text' name='lastName' onChange={handleChange} placeholder='enter lastname' />
//               </div>
//               <div className='input-field'>
//                 <label htmlFor='email'>Email Id</label><br/>
//                 {errors.email && <p className='error_msg'>{errors.email}</p> }
//                 <input type='email' name='email' onChange={handleChange} placeholder='enter email' />
//               </div>
//             <div className='input-field'>
//               <label htmlFor='mobile'>Mobile</label><br/>
//               {errors.mobileNo && <p className='error_msg'>{errors.mobileNo}</p> }
//               <input type='text' name='mobileNo' onChange={handleChange} placeholder='enter mobile' />
//             </div>
//             <div className='input-field'>
//               <label htmlFor='address'>Address 1</label><br/>
//               {errors.address1 && <p className='error_msg'>{errors.address1}</p> }
//               <input type='text' name='address1'  onChange={handleChange} placeholder='enter address' />
//             </div>
//             <div className='input-field'>
//               <label htmlFor='address2'>Address 2</label><br/>
//               <input type='text' name='address2' onChange={handleChange}/>
//             </div>
//             <div className='input-field'>
//               <select onChange={handleChange } name="country"  >
//                <option>select countries</option>
//                   {
//                     countries.map((country)=>
//                     <option key={country.geonameid}>{country.country} </option>
//                    )
         
//                   }
//               </select>
//             </div>
//               <div className='input-field'>
//                 <label htmlFor='state'>state</label><br/>
//                 {errors.state && <p className='error_msg'>{errors.state}</p> }
//                 <input type='text' name='state' onChange={handleChange} placeholder='enter city'/>
     
//             </div>
//             <div className='input-field'>
//               <label htmlFor='city'>City</label><br/>
//               {errors.city && <p className='error_msg'>{errors.city}</p> }
//               <input type='text' name='city' onChange={handleChange} placeholder='enter city'/>
//             </div>
//              <div className='input-field'>
//               <label htmlFor='zipcode'>Zip Code</label><br/>
//               {errors.zipCode && <p className='error_msg'>{errors.zipCode}</p> }
//               <input type='number' name='zipCode' onChange={handleChange} placeholder='enter Zipcode' />
//             </div>
//            <button type='submit' className='submit-button' onClick={submitHandler} >update</button>
//            <Link  to="/users/" ><button type='button' className='link-button'>To List</button></Link>
//           </form>
       
//         </div>
//       </div>
//      </div>
//   )
// }

// export default UpdateUsers
