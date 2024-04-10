import React, { useState } from "react";
import './css/header.css';

import { FaSearch } from 'react-icons/fa';
import { addPost } from "../app/showPostSlice";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, fetchComments } from '../app/redditSlice';

const Header = () => {

    const [input,setInput] = useState();
   const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

 


    const handleChange=(value)=>{

        setInput(value);

    }
    const buscar = () =>{
        //console.log(input)
        dispatch(setSearchTerm(input));
         setInput('');
    }




return <>
         <div className="header">
            <h1>Reddit minimal</h1>
            <input type="text"  value={input} onChange={(e)=>handleChange(e.target.value)}/>
            <button onClick={buscar}><FaSearch  className="search" /> </button>
        </div>


</>

}


export default Header;