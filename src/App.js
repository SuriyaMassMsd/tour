import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Compo/Navbar';
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import PlaceToVisit from './Compo/Visit-places/PlaceVisit';
// import Placevisit from './Compo/Visit-places/Visit2';
import Home from './Compo/Home'
import  Accordion from './Compo/Time_To_visit/Accordian';
import Food from './Compo/Food/Food'

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
          <Route path="/Accordian" element={<Accordion />} />
          <Route path="/Food" element={<Food />} />
        </Routes>

  </BrowserRouter>


  </div>
  );
}

export default App;
