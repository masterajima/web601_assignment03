import React,{useState,useEffect} from "react";
const UserProfile=()=>{
    const[userData,setUserData]=useState([]);
    const fetchUserData=()=>{
        fetch("https://randomuser.me/api").then((resp)=>resp.json()).then((data)=>setUserData(data.results))

    };
    //Creates userProfile with picture/full name
    
        const userProfile = (userMeta) => {
            const {
              name: { first, last },
              picture: { medium }
            } = userMeta;
    
    return(
        <>
    <img src={medium} alt=""/>
    <p>{first},{last}</p>
    </>
    );
    };
    //Fetch API data on component mount
    useEffect(()=>{
        fetchUserData();
    },[]);
    return(<>
    {userData.map((userMeta,idx)=>{
        return<div key={idx}>{userProfile(userData)}</div>;
    })}
    
    </>);

};
export default UserProfile;

