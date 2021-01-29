import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {postData} from '../services/services'
var data
export class Login extends Component {
    constructor(props)
     {
     super(props);
     this.state = {
       username:"",
       password:"",
       test:""
     }
    }
    async handleSubmit()
    {
        debugger
        console.log("username",this.state.username)
        console.log("password",this.state.password)
        let obj = {
            username:this.state.username,
            password:this.state.password
        }
    data= await postData("http://15.206.118.222:5000/admin/auth/login",obj)
   console.log("loginresponse",data)
   
   if(data.statusText !== "error")
   {
    await localStorage.setItem("hrviteToken",data.data.token)
       this.setState({
           redirect:"redirect"
       })
   }
   else{
       this.setState({
           test:"error"
       })
   }

    }
   render()
    {
        return(
            <div>
                
                <h3>Login</h3>
                username:<input type="text" onChange={(e)=>this.setState({username:e.target.value})}/><br/>
                password:<input type="password" onChange={(e)=>this.setState({password:e.target.value})}/>
                <br/>
                <button onClick={(e)=>this.handleSubmit()}>Submit</button>
                {this.state.redirect === "redirect"?<Redirect to="/user"/>:null}
                {this.state.test === "error"?<p style={{color:"red"}}>please provide correct credentials</p>:null}
            </div>
        )
    }
}
export default Login