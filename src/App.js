import Pages from "./pages/Pages";
import Category from "./resources/Category";
import {BrowserRouter, Link} from "react-router-dom";
import Search from "./resources/Search";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home to={"/"}>Home</Home>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Home = styled(Link)`
text-decoration: none;
font-size: 1.2rem;
font-weight: bold;
color: blue;
`

export default App;
