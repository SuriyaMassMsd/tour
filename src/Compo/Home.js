import React from "react";
import Carousels from './Carousel';
import Chennai from './Loc1';
import Hogenakkal from './Loc10'
import Kodaikanal from './Loc2'
import Madurai from './Loc3'
import Kumbakonam from './Loc4'
import Theni from './Loc5'
import Rameshwaram from './Loc6'
import Ooty from './Loc7'
import Kaniyakumari from './Loc8'
import Yercaud from './Loc9'
function Home() {
  return (
    
    <div>
      <Carousels></Carousels>
      <Chennai></Chennai>
      <Rameshwaram></Rameshwaram>
      <Kodaikanal></Kodaikanal>
      <Ooty></Ooty>
      <Kaniyakumari></Kaniyakumari>
      <Kumbakonam></Kumbakonam>
      <Madurai></Madurai>
      <Yercaud></Yercaud>
      <Theni></Theni>
      <Hogenakkal></Hogenakkal>
    </div>
  );
}

export default Home;