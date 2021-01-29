import React, { Component } from 'react';
import {postData1} from '../services/services'
import { Redirect } from "react-router-dom";

export class CreateCompo extends Component {
    constructor(props)
     {
     super(props);
     this.state = {
      Name:"",
      test:""
     }
    }
    async handleSubmit()
    {
        debugger
      let obj={
          name:this.state.Name
      }
      let adddata=await postData1("http://15.206.118.222:5000/admin/department/add",obj);
      if(adddata.statusText === "error")
      {
      let test=adddata.error.response.status;
      this.setState({
          test:test
      })
      if(test === 403 || test === 401)
      {
          this.setState({
              redirect:"redirect"
          })
      }
      console.log("test",test)
    }
    else
    {
        let test=adddata.data.status;
        this.setState({
            test:test
        })

    }
      console.log("addeddata",adddata)
     
     await this.setState({
          Name:""
      })

    }
   render()
    {
        return(
            <div>
            {this.state.redirect === "redirect"?<Redirect to="/"/>:null}
                <h3>Add Department</h3>
                Name: <input type="text" value={this.state.Name} onChange={(e)=>this.setState({Name:e.target.value})}/><br/>
               <br/>
                <button onClick={(e)=>this.handleSubmit()}>Add</button>
                {this.state.test !== 200 && this.state.test !== ""?
                <p style={{color:"red"}}>somenthing went wrong</p>:null}
               {this.state.test === 200?<p style={{color:"green"}}>department added successfully</p>:null}
               
            </div>
        )
    }
}
export default CreateCompo