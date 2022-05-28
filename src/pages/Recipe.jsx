import styled from 'styled-components';
import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';

function Recipe() {
  const [detail, setDetail] = useState({});
  const [activeButton, setActiveButton] = useState(`instructions`);
    let params = useParams();

    const fetchRecipe = async () =>{
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.recipeid}/information?apiKey=b5d9f51885ac4d409cc4df5d5b3627cd`);
      const recipeData = await data.json();
      setDetail(recipeData);
    }

    useEffect(()=>{
      fetchRecipe();
    }, [params.recipeid]);
  return (
    <Recipewrapper>
      <div>
        <img src={detail.image} alt="" />
        <h2>{detail.title}</h2>
      </div>
      <Info>
        <Button className={activeButton === "instructions" ? 'active' : ''} onClick={()=> setActiveButton('instructions')}>Instruction</Button>
        <Button className={activeButton === "ingredients" ? 'active' : ''} onClick={()=> setActiveButton('ingredients')}>Ingredient</Button>
        {activeButton === "instructions" &&(


        <div>
          <h3 dangerouslySetInnerHTML={{__html: detail.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: detail.instructions}}></h3>
        </div>
        )}
        {activeButton === "ingredients" && (

        <ul>
          {detail.extendedIngredients.map((ingredients)=>(
          <li key={ingredients.id}>{ingredients.original}</li>
          ))}
        </ul>
        )}
      </Info>
    </Recipewrapper>
  )
}

const Recipewrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
  display: flex;

  .active{
    background: linear-gradient(45deg, #291b1b, #1a1616);
    color: white;

  }
  h2,h3{
    margin-bottom: 1rem;
  }

  li{
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  ul{
    margin-top: 2rem
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: 2px solid black;
  color:#291b1b;
  background:white;
  font-weight: 600;
  margin-right: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 5rem;
`;
export default Recipe
