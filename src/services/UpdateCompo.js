import React, { Component } from 'react';
import {postData1} from '../services/services'
import { Redirect } from "react-router-dom";

export class UpdateCompo extends Component {
    constructor(props)
     {
     super(props);
     this.state = {
      Name:"",
      id:"",
      test:"",
      redirect:""
     }
    }
    async handleSubmit()
    {
        debugger
      let obj={
          name:this.state.Name,
          dId:this.state.id
      }
      let adddata=await postData1("http://15.206.118.222:5000/admin/department/update",obj);
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
        Name:"",
      id:""
    })
     

    }
   render()
    {
        return(
            <div>
                {this.state.redirect === "redirect"?<Redirect to="/"/>:null}
                <h3>Update Department</h3>
                Id: <input type="number" value={this.state.id} onChange={(e)=>this.setState({id:e.target.value})}/><br/>
                Name: <input type="text" value={this.state.Name} onChange={(e)=>this.setState({Name:e.target.value})}/><br/>
               <br/>
                <button onClick={(e)=>this.handleSubmit()}>Update</button>
                {this.state.test !== 200 && this.state.test !== ""?
                <p style={{color:"red"}}>somenthing went wrong</p>:null}
               {this.state.test === 200?<p style={{color:"green"}}>department updated successfully</p>:null}
               
            </div>
        )
    }
}
export default UpdateCompo