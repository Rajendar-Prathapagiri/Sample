import React, { Component } from 'react';
import {getData} from '../services/services'
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { Redirect } from 'react-router-dom';

const list=[
    {
      "id": 20,
      "name": "FINANCE41",
      "status": "a"
    },
    {
      "id": 19,
      "name": "FINANCE4",
      "status": "a"
    },
    {
      "id": 18,
      "name": "FINANCE3",
      "status": "a"
    }
]
var listdata=[]
export class List extends Component {
    constructor(props)
     {
     super(props);
     this.state = {
         listdata:{},
         check:false,
         redirect:""

      
     }
    }
   async getlist()
    {
        debugger
        let data= await getData("http://15.206.118.222:5000/admin/department/list")
        

      console.log("list",this.state.listdata)
      if(data.statusText === "error")
      {
      if(data.error.response.status === 403 || data.error.response.status=== 401)
      {
          this.setState({
              redirect:"redirect"
          })

      }
    }
    else
    {
        listdata=data.data.data.rows
    }
      await this.setState({
          check:true
      })



    }
    render()
    {
        debugger
        return(
            <div>
               {this.state.redirect === "redirect"?<Redirect to="/"/>:null}
                 <button onClick={(e)=>this.getlist(e)}>GETLIST</button>
                 {this.state.check?
                 <div>
                 <h1>List</h1>
                      <ReactTable
                        columns={[
                            {
                                Header: "Id",
                                accessor: "id",
                                
                              },
                          {
                            Header: "Name",
                            accessor: "name",
                            
                          },
                          {
                            Header: "Status",
                            accessor: "status",
                           
                          }
                         ]}
                        data={listdata}
                        showPagination={true}
                        defaultPageSize={3}
                      /></div>:null}
                    </div>
            )
    }
}
export default List
