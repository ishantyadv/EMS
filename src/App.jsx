import React, { useContext, useEffect, useState } from 'react'
import Login from './component/Auth/Login';
import EmployeeDashboard from './component/Auth/Dashboard/EmployeeDashboard';
import AdminDashboard from './component/Auth/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';
import { data } from 'autoprefixer';

const App = () => {

  // useEffect(()=>{
  //   // setLocalStorage()
  //   getLocalStorage()
  // },)

const [user , setUser] = useState(null);
const [loggedInUserData, setLoggedInUserData] = useState(null); 
const [userData,setUserData] = useContext(AuthContext);

// console.log("alldata",authData.employees)

useEffect(() =>{
    const loggedInUser = localStorage.getItem('loggedInUser');

  if(loggedInUser){
    const userData = JSON.parse(loggedInUser);
     setUser(userData.role) 
     setLoggedInUserData(userData.data)
  }
},[]);

  


const handleLogin = (email,password)=>{

  if(email =='admin@me.com'&& password == '123'){
   setUser('admin')
   
   localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
  
  }else if(userData){
    const employee = userData.find((e)=>e.email===email && e.password===password)
    // console.log(employee,"thsi si the emp")
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee }));

    }
   
    

  }
  else{
    alert('invalid ')
  }
}

 

  return (
   <>
    {/* {!user ? <Login handleLogin={handleLogin}/>: '' } 
    { user == 'admin' ? <AdminDashboard/> :(user == employee ? <EmployeeDashboard data ={loggedInUserData} /> : null) } */}

    {!user?<Login handleLogin={handleLogin}/>:user == 'admin' ? <AdminDashboard changeUser={setUser} /> :(user == 'employee' ? <EmployeeDashboard changeUser={setUser}  data = {loggedInUserData}/> : null) }
   </>
  )
}

export default App;

