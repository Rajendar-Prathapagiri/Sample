import React, { Component } from 'react';
import {getData} from '../services/services'
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import List from '../services/List';
import { Link } from "react-router-dom";



var listdata=[]
export class User extends Component {
    constructor(props)
     {
     super(props);
     this.state = {
         listdata:{},
         check:false
        }
    }
   
    render()
    {
        debugger
        return(
            <div>
                <h1>User</h1><br/>
                <button><Link to="/admin">Admin</Link></button><button><Link to="/manager">Manager</Link></button>
                 <br/>
                 <br/>
                 <br/>
                 <h4>Please click the button to see  the departments</h4>
                  <List/>        
                 </div>
            )
    }
}
export default User
