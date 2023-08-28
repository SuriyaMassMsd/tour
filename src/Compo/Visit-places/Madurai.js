import React from "react";
import Madurai1 from "../../assets/Home/madurai1.jpeg";
import Madurai2 from "../../assets/Home/madurai2.jpeg";
import Madurai3 from "../../assets/Home/madurai3..jpeg";
import Madurai4 from "../../assets/Home/madurai4..jpeg";

function MaduraiCity() {
  return (
    <div className=" mt-5 ">
      <div className="text-center">
        <h3>Madurai</h3>
        <h3>Tourist Places Visit</h3>
      </div>

      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Madurai1}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Vaigai Dam, Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Vaigai Dam, a magnificent human-made structure, is constructed over
            River Vaigai near Andipatti, Theni District in the South Indian
            State of Tamil Nadu. Andipatti lies about 70 kilometres from Madurai
            and travellers on their way to Periyar Wildlife Sanctuary often
            visit this massive and wondrous dam. Over the years, the site has
            become a favourite picnic spot as it gets beautifully illuminated in
            the evenings especially on weekends, and one can spend hours
            admiring the splendid view. The soft and warm sunrises by the
            reservoir are worth experiencing too.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            On one side of the dam is a beautiful garden known as Little
            Brindavan maintained by the management for the visitors. Little
            Brindavan has a variety of exotic flowers and plants and is a
            preferred getaway for nature lovers living nearby. The play area
            made especially for children is a relief for parents as they watch
            their little ones have fun in the unpolluted air.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Meghamalai, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              {" "}
              Often known as the "High Wavy Mountains", Meghamalai is a petit
              yet beautiful place located in the Western Ghats in the state of
              Tamil Nadu. At an elevation of 1500 meters, this place is a
              perfect getaway to beat the heat and enjoy some peaceful time
              relaxing amidst nature. Nestled between the evergreen forest this
              place is filled with the fresh aroma of cardamom, cinnamon and
              pepper. The lush green tea plantations will give you an
              opportunity to sip fresh piping tea and enjoy a lazy stroll amidst
              nature replete with flora and fauna.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              The Meghamalai region of the Western Ghats is a paradise
              unexplored even by the people of Tamil Nadu. The local Tamil
              language also refers to it as Paccha Kumachi, which means 'Green
              Peaks'. Located at approximately 1,500 metres above sea level,
              this small mountain village is surrounded by tea and cardamom
              plantations.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "245px" }}
              src={Madurai2}
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
            style={{ width: "200px", height: "250px" }}
            src={Madurai3}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder"> Samanar Hills,Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Located in Keelakuyilkudi village near Madurai, Samanar Hills or
            Samanar Malai is a beautiful hill rock complex which was originally
            home to Tamil Jain monks. The hill caves are a popular place of
            tourism and have elaborate carvings and drawings of the monks, on
            the interior walls. The spot also has a beautiful lotus temple
            located in the premises.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            There is no better place to escape the heat than this picturesque
            getaway surrounded by nature. Meghamalai is one of the best places
            to visit in Tamilnadu if you are looking for a quiet and peaceful
            weekend away from the city. During your vacation in this hill
            station, you can explore the following samanar hills tourist places.
            The city stands out for the active nightlife of the people, making
            it the safest place to travel.Madurai which is one of the oldest
            temple city has lot more to offer than just spiritual things
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Thirumalai Nayakar, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Thirumalai Nayakar Palace was erected in 1636 AD in the city of
              Madurai, by King Thirumalai Nayak. The palace depicts the perfect
              blend of Dravidian and Rajput styles. After Independence, this
              palace was declared as a national monument and till date continues
              to be one of the spectacular monuments of Southern India. The
              magnificent palace is located in the vicinity of the very famous
              Meenakshi Amman Temple.and indigenous fauna, which make it a
              nature lover's paradise. Depicting the Saracenic style of
              architecture, it was constructed during the rule of Nayak Dynasty
              and is widely considered as the most illustrious monument built by
              the Madurai Nayak Dynasty.he alluring palace (Nayak Mahal palace)
              is in the main city of Madurai, which is located 2 km away from
              the Meenakshi Amman temple.The Thirumalai Nayak Mahal was built by
              the Thirumalai Nayak king during the 16th century.The building
              that is still observable was the resident of the King Nayak and
              the throne of the King Nayak has been kept for display.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "242px" }}
              src={Madurai4}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaduraiCity;