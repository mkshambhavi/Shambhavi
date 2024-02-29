import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import'./App.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'

function Bootstrap() {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
  return (
    <div className='container'>
        <div className='mt-3'>

            
            <h3> Fetch data from API in react with axios</h3>
            <Table striped bordered hover>
            {/* <div className='Tab'> */}
                
                <thead>
                    <tr>
                        <th>ID</th>
                        <th> name</th>
                        <th>username</th>
                        <th> email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, index)=>{
                            return <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        })
                    }
                </tbody>
                </Table>
            </div>
        </div>

    // </div>

  )
}

export default Bootstrap;