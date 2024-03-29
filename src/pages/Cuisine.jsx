import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import {motion} from 'framer-motion';
import {useParams, Link} from 'react-router-dom';


function Cuisine() {

  const [cuisine, setCuisine] = useState ([]);
  let params = useParams();

const getCuisine = async (name) =>{
  const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b5d9f51885ac4d409cc4df5d5b3627cd&cuisine=${name}&number=7`);
  const recipes = await data.json();
  setCuisine(recipes.results);
}
useEffect(()=>{
  getCuisine(params.type);
  console.log(params.type);
},[params.type]);

  return (
    <Grid>
      {cuisine.map((item)=>{
        console.log(item.title);
        return(
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })};
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

export default Cuisine;
