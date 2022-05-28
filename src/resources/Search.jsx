import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {

  const [input, setInput] = useState("");

  const navigation = useNavigate();

  const submitHandler = (e) =>{
    e.preventDefault();
    navigation("/result/" + input);
  };

  return (
    <Searchform onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input 
        onChange={(e)=>{ setInput(e.target.value)}} type="text" value={input} />
      </div>
     
    </Searchform>
  )
}

const Searchform = styled.form`
  margin: 0rem 15rem;
  
  
  div{
    position: relative;
    width: 100%;

  }

  input{
    border: none;
    background: linear-gradient(45deg, #291b1b, #1a1616);
    padding: 1rem 3rem;
    border-radius: 1rem;
    color: #f8f8f8;
    outline: none;
    width: 100%;
  }
  svg{
    position: absolute;
    top:50%;
    left:0%;
    transform: translate(100%, -50%);
    color: #e7dbdb;
  }
`

export default Search
