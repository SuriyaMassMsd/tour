import React from "react";
import Theni1 from "../../assets/Home/theni1.jpeg";
import Theni2 from "../../assets/Home/theni2.jpeg";
import Theni3 from "../../assets/Home/theni3.jpeg";
import Theni4 from "../../assets/Home/theni4.jpeg";
function TheniCity() {
  return (
    <div className=" mt-5 ">
      <div className="text-center">
        <h3>Theni</h3>
        <h3>Tourist Places Visit</h3>
      </div>

      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Theni1}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Chinna Suruli Falls, Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Located in the lap of wild, green forests, Chinna Suruli Falls is a
            picturesque destination to visit from Theni. It cascades all the way
            down from Meghamalai to form a pool of cool, sparkling water at the
            foothills of the mountain. Located around 54 kilometres away from
            the main centre, near the Kombaithozhu village, Chinna Suruli Falls
            is a lovely and serene destination to visit in and around Theni. It
            can be included in your itinerary of local sightseeing if you are
            visiting Theni and its nearby attractions
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Chinna Suruli Falls is one of the beautiful waterfalls near Madurai
            and the top visiting places in Megamalai range. It is also known as
            Cloudland Falls as it originates in the Megamalai Hills. In the
            local language, Chinna means small or younger, so in a sense, it is
            called the younger Suruli
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Kumbakkarai Falls, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              {" "}
              Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai
              Falls is a mesmerising waterfall that is situated at the foothills
              of the Kodaikanal hills. The water cascades down in two layers- at
              the first stage, the water collects at the rock boulders and
              recesses. And in the second stage, it falls down the layer of
              rocks. These recesses are named after wild animals like tiger,
              snake, elephant, cheetah etc.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Besides boasting of immense scenic beauty and the melodious
              tinkering of the gushing waters, the place also offers utter peace
              and tranquility. Also unlike most other waterfalls, Kumbakkarai
              Falls also offer shallow waters where tourists are welcomed to
              swim or to take a dip. The popular tourist spot is the most
              crowded during the rainy season when the water level is high and
              the neighboring areas glows with greenery.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "245px" }}
              src={Theni2}
              alt=""
            ></img>
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Theni3}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Meghamalai,Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni
            district is the kind of hidden paradise that you read about in
            books, complete with exhilarating trek routes, breathtaking scenes
            and an excellent opportunity to take a break from your everyday life
            in the lap of nature.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            The Highwavys Mountain, locally called the Meghamalai, is an
            undulating terrain of peaks belonging to the Varushanad Range of
            Western Ghats, in Theni district of Tamil Nadu. Located at an
            elevation of 1,500 metres above the sea level, Meghamalai is covered
            in the trademark green of Sahyadri, thus earning the name 'Pacha
            Kumachi' in Tamil, meaning 'Green Peaks'. Green peaks of Meghamalai
            Source Up until recently, the Meghamalai Hills were restricted to
            private estates of tea and coffee plantations.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Suruli Falls, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Suruli Falls is a beautiful waterfall in the Theni district of
              Tamil Nadu and one of the major tourist attractions of Theni as
              well. It is a perfect destination to get up close and personal
              with the nature and cool off in its pristine waters
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              At a distance of 123 kms from Madurai, 22 Kms from Thekkady (via
              Gudalur & Karuna Muthevan Patti), 10 Kms from Kambam (via Suruli
              Patti) & 548 Kms from Chennai, Suruli Falls are situated amidst
              rich flora fauna and serve as a perfect picnic spot. The falls
              serve as the venue of Summer Festival, organized every year by the
              Tamil Nadu Tourism Department. The Kailasanathar Temple Cave is
              also an added attraction of the place. There are also other 18
              caves in and around the Suruli Falls. The Kailasanatha temple and
              Suruli Velappar temple are also nearby the falls. The falls are
              reachable by road from Kambam and Gudalur towns.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "235px" }}
              src={Theni4}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheniCity;