import Trending from "../resources/Trending";
// import Favorite from "../resources/Favorite";
import Veggie from "../resources/Veggies";
import {motion} from 'framer-motion';



import React from 'react'

const Home = () => {
  return (
   
      <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.8}}
      >
        <Trending />
        <Veggie />
      </motion.div>
    
  );
};

export default Home
