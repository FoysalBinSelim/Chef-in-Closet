
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';

function Trending() {

    const [trending, setTrending] = useState([]);

    useEffect(() =>{
        getTrend();
    },[]);

    const getTrend = async () =>{

        const storage = localStorage.getItem("trending");

        if(storage){
          setTrending(JSON.parse(storage));
        }
        else{

          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=b5d9f51885ac4d409cc4df5d5b3627cd&number=9`);
          const data = await api.json();
          localStorage.setItem("trending", JSON.stringify(data.recipes));
          // console.log(data);
          setTrending(data.recipes)
        }
    }
  return (
    <div >
            <Wrapper>
              <h2>Trending</h2>
              <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                gap: "3rem",
              }}>
              {trending.map((recipe)=>{
                return(
                  <SplideSlide key={recipe.id}>
                  <Card>
                    <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt="" />
                    <Gradient/>
                    </Link>
                  </Card>
                  </SplideSlide>
                );
              })};
              </Splide>
            </Wrapper>
         
    </div>
  )
}

const Wrapper = styled.div `
margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
// padding: 0rem 1rem;
position: relative;
img {
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p{
  position: absolute;
  z-index: 10;
  left:50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 600;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  height: 40%;
}
`;

const Gradient = styled.div `
z-index: 3;
width: 100%;
height: 100%;
position: absolute;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;
export default Trending
