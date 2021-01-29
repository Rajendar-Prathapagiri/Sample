import React, { Component } from 'react';
import CreateCompo from '../services/CreateCompo'
import UpdateCompo from '../services/UpdateCompo'
import {postData} from '../services/services'
import User from './User';
import List from '../services/List';
import { Link } from "react-router-dom";

export class Manager extends Component {
    constructor(props)
     {
     super(props);
     this.state = {
      
     }
    }
    render()
    {
        return(
            <div>
                <h1>Manager</h1><br/>
                <button><Link to="/user">User</Link></button><button><Link to="/admin">Admin</Link></button>
                <CreateCompo/>
                <UpdateCompo/>
                <br/>
                <h4>Please click the button to see  the departments</h4>
                <List/>
            </div>
        )
    }
}
    export default Manager