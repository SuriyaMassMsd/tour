import Accordion from 'react-bootstrap/Accordion';
import Time from './Place';

function AllCollapseExample() {
  return (
    <Accordion>

     <div className='container text-start mt-5 '>
          <h4 id='head-text' >TAMILNADU TOURISM</h4>
          <h2 id='head-text' >Best Time To Visit</h2>
      </div> 
     
     <div className='container image-start mt-5'>
      <img src={require('../../assets/Gallery/Climate.jpeg')} alt=''/>
      <caption id='cap-head'>Best Time To Visit</caption>
     </div>

     <div className="d-flex justify-content-center" >
        <h4 id='acc-head'>More about Best Time to Travel to Tamil Nadu</h4>
        </div>

        <div className='ms-5 me-5 ps-5 mt-4'>
      <Accordion.Item eventKey="0"  id='acc-full'>
        <Accordion.Header>Tamil Nadu in Summer (March - May)</Accordion.Header>
        <Accordion.Body id='para' className='mt-1'>
        This season begins in March and lasts until May. The temperatures are
high, ranging between 35°C and 40°C and so is the humidity especially in the
coastal regions. Sightseeing during this time is not very convenient because of
the improper temperature. The season, however, is visited to witness the
festival of Chithirai held in the Madurai temple in the month of March-April.
Puthandu, another important festival that marks the Tamil New year falls in
mid-April and Mahamahan Festival is celebrated in March (celebrated once in
12 years). If visiting during summer, it is a good idea to visit the attractions on
higher attitudes. Hill stations like Ooty, Kodaikanal and Yelagiri hills are the best
where the temperature is pleasant and has scenic views that tourists can
witness.
      
      <div className='mt-3 me-2' id='imgi' >
          <img id="acc-img" src={require('../../assets/Gallery/image.jpeg')} alt=''/>
          <caption className='fs-6 ' id='pic-cap'>Pillar Rocks of KodaikanalSource</caption>
      </div>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1"  id='acc-fulll'>
        <Accordion.Header>Tamil Nadu in Monsoon (June - September)</Accordion.Header>
        <Accordion.Body id='para' className='mt-1'>
                  This southern state sees monsoon two times a year - once between
          June to September and the retreating monsoon in November and December.
          The temperature is slightly less than what it is in the summer season. It ranges
          between 25°C and 30°C. The rains often occur in long spells and the humidity
          during this time is high especially in coastal regions. Some of the hilly areas see
          massive rainfall and venturing out during this time around is not a great idea.
          The Eastern seaboard of Tamil Nadu sometimes experiences cyclones during
          the late monsoon, making it an unsafe place to visit.

          <div className='mt-3 me-2' id='imgi' >
          <img id="acc-img" src={require('../../assets/Gallery/image1.jpeg')} alt=''/>
          <caption className='fs-6 ' id='pic-cap'>A Rainy Day in Chennai Source</caption>
      </div>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2"  id='acc-fullll'>
        <Accordion.Header>Tamil Nadu in Winter (October - February) </Accordion.Header>
        <Accordion.Body>
                      Winter in Tamil Nadu begins in October and lasts until February.
              November and December have intermittent rainfall because of the retreating
              monsoon, but otherwise, the temperature remains between 10°C and 15°C. The
              humidity is low, and it is the best climate for sightseeing and touring the cities.
              Most of the tourist attractions are bustling with activities during this season.
              The beaches call the beach lovers, and adventure seekers for bathing in the
              sun, swimming and water sports as the temperature remains moderate all
              through
              day.
              the
              <div className='mt-3  ms-5' id='imgi' >
          <img id="acc-img" src={require('../../assets/Gallery/image2.jpeg')} alt=''/>
          <caption className='fs-6 ' id='pic-cap'>Pechuiparai Reservoir in Kanyakumari District Source</caption>
      </div>
        </Accordion.Body>
      </Accordion.Item>
      </div>

      <div className="container" id='text'>
                The best time to visit Tamil Nadu is during the winter season, i.e. from November to February when the temperature is relatively low, and pleasant to explore the attractions in the state. Monsoons bring torrential downpour which makes it an inappropriate time to travel through Tamil Nadu. Summer, however, is perfect for exploring the hills stations. Tourists can pick the region they wish to see according to the season because offseason visits could be extremely inconvenient for some.
            </div>
   
   <div>
    <Time></Time>
   </div>

    </Accordion>



  );
}

export default AllCollapseExample;