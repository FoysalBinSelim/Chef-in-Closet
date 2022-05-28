import React from 'react';
import {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import styled from 'styled-components';

function Result() {

    const [searchResult, setSearchResult] = useState([]);
    let params = useParams();

    const getResult = async (input) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b5d9f51885ac4d409cc4df5d5b3627cd&query=${input}&number=7`);
        const recipes = await data.json();
        setSearchResult(recipes.results);
      }

      useEffect(()=>{
        getResult(params.search);
      },[params.search]);

  return (
    <Grid>
      {searchResult.map((item)=>{
        return(
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 2rem;
`;

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 1rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;

export default Result
