import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

const ShowCourses = () => {
    const [data, setData] = useState([]);
    const fetchCourse = async ()=> {
        try{
            console.log("Testing");
            const resp = await fetch("http://localhost:4000/api/user");
            const apiData = await resp.json();
            console.log("API_DATA apiData: ",apiData);
            //console.log("API_DATA apiData.data: ",apiData.data);
            //setData(apiData.data);
            setData(apiData);
        } catch (err) {
            console.log("ERROR: ",err);
        }
    };
    useEffect(()=>{
        fetchCourse();
    },[]);
  return (
    <div>
      Hello Course...
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>User Photo</th>
          <th>User Name</th>
          <th>User Email</th>
          <th>User Mobile</th>
          <th>User DOB</th> 
          <th>User Status</th>
        </tr>
      </thead>
      <tbody>
      {data.map((d,i)=>{
        return (
        // <div>Hello...{d.UserName},{d.UserEmail},{d.UserMobile} <br/>
        <tr>
          <td>{i+1}</td>
          <td><img src={d.UserPhoto} height="100" width="100"></img></td>
          <td>{d.UserName}</td>
          <td>{d.UserEmail}</td>
          <td>{d.UserMobile}</td>
          <td>{d.UserDOB}</td>
          <td>{d.UserStatus}</td>
        </tr>
        );
     
        {/* console.log(`Value at ${i} is ${d.UserName}, ${d.UserEmail}, ${d.UserMobile}`); */}
      })}
      </tbody>
    </Table>
    </div>
  );
};

export default ShowCourses
