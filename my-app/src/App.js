import React, { useEffect } from "react";
import React ,{useEffect,useState} from 'react';
import axios from axios;
import{Row,Col,Typography,Space} from useActionData;
import User from 'User';
import UserList from UserList;
import Profile from '/pages/Profile';
import {Routes,Route} from 'react-router-dom';
import { useActionData } from "react-router";
const {Title}=Typography;
export default function App(){
  const[blog,setBlog]=useState(null);
  const[status,setStatus]=useState(false);
  useEffect(()=>{
    axios
    .get('https:/jsonplaceholder.typeicode/posts')
    .then((response)=>{setBlog(response.data)});
    setStatus(true);
  })
  .catch(()=>{
    console.log('Api call failed');
    setStatus(false);
  []});
  return(<Space direction='vertical' size='middle' style={{display:'flex'}}>
    <Row gutter={16}>
      {status&
      blog.map(blogObj)=>{
        return(
          <MyCard>
            key={blogObj.id}
            title={blogObj.title}
            content={blogObj.body}
            </MyCard>
          
        );

}});
      <Col className='gutter-row'></Col>
      <title>pharmacy app</title>
    </Row>
    <Divider Orientation='center'>Navigation</Divider>
    <Row>
      <nav>
        <Link to='/home'><Fahome/>Home</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
    </Row>
    <Divider orientation='center'>Navigation</Divider>
    <Row></Row>
  </Space>
      <Col className='gutter-row'></Col>
      <title>pharmacy app</title>
    </Row>
  </Space>);
  const userList=[{
    name:'Andrew',
    Email:"masterandrew@gmail.com",
    phone:'647 685 8696',
    website:'expedia.com'
  },{
    name:'chris',
    Email:"masterandrew@gmail.com",
    phone:'647 685 8696',
    website:'expedia.com'
  }]
  return(
    <div className="App">
      {userList.map()}
      <p>USER LIST COMPONENT</p>
      <UserList/>
    </div>
  );
}

