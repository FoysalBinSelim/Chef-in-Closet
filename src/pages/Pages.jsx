import React from 'react'
import Home from './Home';
import Cuisine from "./Cuisine";
import Result from './Result';
import {Route, Routes, useLocation} from 'react-router-dom';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cuisine/:type' element={<Cuisine/>} />
        <Route path='/result/:search' element={<Result/>}/>
        <Route path='/recipe/:recipeid' element={<Recipe/>} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages
