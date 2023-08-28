import './App.css';

import Navb from './Compo/Navbar';
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import PlaceToVisit from './Compo/Visit-places/PlaceVisit';
// import Placevisit from './Compo/Visit-places/Visit2';
import Home from './Compo/Home'

function App() {
  return (
    <div>
  < BrowserRouter>
  <Navb/>
  {/* < Home /> */}
  {/* <Carousels/>
  <Chennai/>
  <Kodaikanal/>
  <Madurai/>
  <Kumbakonam />
  <Theni />
  < Rameshwaram />
  < Ooty />
  < Kaniyakumari/>
  < Yercaud />
  <Hogenakkal/> */}
<Routes>
          <Route  path="/" element={< Home/>}/>
          <Route path="/PlaceToVisit" element={<PlaceToVisit />} />
        </Routes>

  </BrowserRouter>


  </div>
  );
}

export default App;
