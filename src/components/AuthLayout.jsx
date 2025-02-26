import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate();
    const [loader,setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
            // TODO : make it more easy to understand
        if(authentication && authStatus !== authentication){  //lets authStatus = false => true && (false !== true) => true && true  => true => means go to login(not home page)
            navigate("/login")
        }
        else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</> ;
}

