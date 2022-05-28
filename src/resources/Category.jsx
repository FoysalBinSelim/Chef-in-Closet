import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodleBall, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Category = () => {
  return (
    <List>
        <Slinks to={"/Cuisine/Italians"}>
            <FaPizzaSlice/>
            <h3>Italians</h3>
        </Slinks>
        <Slinks to={"/Cuisine/Americans"}>
            <FaHamburger/>
            <h3>American</h3>
        </Slinks>
        <Slinks to={"/Cuisine/Chinese"}>
            <GiNoodleBall/>
            <h3>Chinese</h3>
        </Slinks>
        <Slinks to={"/Cuisine/Japanese"}>
            <GiChopsticks/>
            <h3>Japanese</h3>
        </Slinks>
    </List>
  )
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`;

const Slinks = styled(NavLink)`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 1rem;
    text-decoration: none;
    background: linear-gradient(35deg, #110514, #290d30);
    height: 6rem;
    width: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h3{
        color: white;
        margin-top: 0.4rem;
        font-size: 0.8rem;
    }
    svg{
       color: #22c97b; 
       font-size: 1rem;
    }
    &.active{
        background: linear-gradient(to right, #6333b1, #9265da);

        h3{
            color: white;
        }
        svg{
            color: white;
        }
    }
`;

export default Category
