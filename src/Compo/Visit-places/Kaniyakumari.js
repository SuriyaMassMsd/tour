import React from "react";
import Kaniyakumari1 from "../../assets/Home/kanyakumari1 (1).jpeg";
import Kaniyakumari2 from "../../assets/Home/kanyakumari1.(2).jpeg";
import Kaniyakumari3 from "../../assets/Home/kanyakumari1 (3).jpeg";
import Kaniyakumari4 from "../../assets/Home/kanyakumari1 (4).jpeg";
function KaniyakumariCity() {
  return (
    <div className=" mt-5 ">
      <div className="text-center">
        <h3>Kaniyakumari</h3>
        <h3>Tourist Places Visit</h3>
      </div>

      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Kaniyakumari1}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Kanyakumari Beach, Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Located in the southernmost part of India, Kanyakumari beach with
            its beautiful hue-changing beaches, the confluence of three water
            bodies: Bay of Bengal, Indian Ocean, and the Arabian Sea.
            Miraculously, here you can see that the water of three seas does not
            mix, you can distinguish between the turquoise blue, deep blue, and
            sea green waters of the three seas, though the colors keep changing
            with the season and the day's weather.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            The beach is not conducive to swim or surf as the water as the sea
            is rough and the beach is rocky.To enjoy the best view, you can
            visit the Triveni Sangam point and climb up the famous lighthouse
            watchtower to entirely take in its beauty.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Vivekananda Memorial, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              {" "}
              The magnificent Vivekananda Rock Memorial is located on a small
              island off Kanyakumari. It has the picturesque Indian Ocean in its
              backdrop. It is situated on one of the two adjacent rocks
              projecting out of the Lakshadweep Sea and comprises of the
              'Shripada Mandapam' and the 'Vivekananda Mandapam'. Vivekananda
              Rock Memorial is located at about 500 meters east of the mainland
              of Vavathurai in Kanyakumari and can be accessed by regular
              ferries.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              This statue was built in the year 1970 on the island situated in
              Vavathurai, built on the site where Vivekananda attained
              enlightenment. The Shripada Mandapam has a study hall and a
              museum, where you can explore Vivekananda's life and work in
              depth.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "220px" }}
              src={Kaniyakumari2}
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
            src={Kaniyakumari3}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Thiruvalluvar Status,Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Dedicated to the accomplished philosopher and poet Thiruvalluvar,
            this beautiful statue finds itself on a small island near
            Kanyakumari. Thiruvalluvar was the author of a legendary work in the
            world of Literature, Tirukkural, the classic Tamil text. In his
            devotion, the work for the statue started in 1990 and continued till
            1999, during the year in which the figure finally got completed.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            This monument stands tall at a mighty height of 133 feet and is
            perched upon a 38-foot pedestal. The pedestal's height represents
            the 38 chapters of virtue in Thirukkural. Full of symbolism and
            cultural significance, this destination is awe-inspiring, and a
            must-visit. V. Ganapati Sthapati sculpted the statue, and it was
            unveiled on January 1, 2000. Surrounded by the waters, the statue is
            settled at an ideal location, and a short ferry ride can quickly
            help you reach the masterpiece.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Thirparappu Falls, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Located at a distance of about 55 kilometers from Kanyakumari, the
              cascading waters of the Thirparappu Falls make up for an
              enchanting sight. This waterfall is a manmade one and falls from a
              height of 50 feet. The water collects in a quaint pool below which
              is an ideal place to frolick around, especially for children. The
              falls are surrounded by thick green foliage and indigenous fauna,
              which make it a nature lover's paradise.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              These falls are a unique combination of streams that flow together
              to form a magnificent waterfall. The containment below is no less
              than a top tier waterpark and is perfectly safe too. The entrance
              of this destination has a small temple dedicated to Lord Shiva and
              is highly revered by the locals
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "242px" }}
              src={Kaniyakumari4}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KaniyakumariCity;