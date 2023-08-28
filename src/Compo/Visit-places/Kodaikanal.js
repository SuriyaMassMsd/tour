import React from "react";
import Kodaikanal1 from "../../assets/Home/kodaikanal1....jpeg";
import Kodaikanal2 from "../../assets/Home/kodaikanal2.jpeg";
import Kodaikanal3 from "../../assets/Home/kodaikanal3..jpeg";
import Kodaikanal4 from "../../assets/Home//kodaikanal4.jpeg";

function KodaikanalCity() {
  return (
    <div className=" mt-5 ">
      <div className="text-center">
        <h3>Kodaikanal</h3>
        <h3>Tourist Places Visit</h3>
      </div>
      {/* 1st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "200px" }}
            src={Kodaikanal1}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Green Valley View, Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Formerly known as Suicide point, the Green Valley View offers a
            breathtaking view of the plains, deep valleys and hills. The
            mesmerizing view of the Vaigai Dam is an unforgettable experience.
            It used to be known as suicide point because of the dangerous valley
            which is dense and deep; below the point of more than 5000 feet
            drop.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Located at a distance of 5.5 km from the Kodaikanal Lake, the Green
            Valley View not just offers a gorgeous view, but is also surrounded
            by a lot of monkeys. On the way to the point, there are several
            shops which offer homemade chocolates, ornaments and a wide range of
            flowers.
          </p>
        </div>
      </div>

      {/* 2nd content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Kodai Lake, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Kodaikanal Lake is a manmade lake in the Kodaikanal city which is
              also known as Kodai Lake. Vera Levinge was the man responsible for
              the creativity and resources of this lake amidst Kodaikanal town.
              This lake was developed by the British and early missionaries from
              the USASA.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              The star-shaped lake is centrally located in Kodaikanal and is
              surrounded by the rich green Palani Hills Range the main watershed
              for the lake. The lake is situated at an elevation of 2285m above
              sea level and has an average depth of 3.0m. The lake is at a
              distance of 3 km from the Kodai Bus stand.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "200px" }}
              src={Kodaikanal2}
              alt=""
            ></img>
          </div>
        </div>
      </div>

      {/* 3st content*/}
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "220px" }}
            src={Kodaikanal3}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Bear Shola Falls,Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Located at a mere distance of 2 kilometres from the Kodaikanal Lake,
            the Bear Shola Falls is a popular picnic spot in the region. This
            cascade is a seasonal attraction that comes to life in its fullest
            during the monsoons. An interesting legend behind the unique name of
            this place is that it was a favourite haunt of a bear who used to
            frequent this water body to drink water, hence imparting it the name
            Bear Shola Falls.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Wrapped with dense forests coupled with the chirping of birds, Bear
            Shola Falls is a little heaven. Also, the forest area of the Western
            Ghats situated near the falls is a biodiversity hotspot where you
            can have a rendezvous with animals like monkeys and deer in the
            wild.
          </p>
        </div>
      </div>

      {/* 4th content*/}
      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Pillars Rocks, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Situated in the 'Princess of Hill stations', Kodaikanal, the
              Pillar Rocks have become a lovely picnic spot. Constituting a
              beautiful mini garden; the place is named so as it has three
              vertically positioned boulders reaching up to a height of 400
              feet. The aura here is full of affection and is evidence of a
              great love story. The 'white cross' which once existed on these
              rocks represented David Gell's excellent tribute to love. The view
              of rocks is not something to be missed. They stand as an untouched
              miracle for the tourists visiting Kodaikanal.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              The pillars are famous for providing bird's view of nearby
              surroundings. The chambers between these two massive rocks are
              called the Devil's Kitchen. Fewer times you might find rocks
              covered with mist and clouds, but when the ways become clear
              nothing beautiful than this could be ever seen.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "242px" }}
              src={Kodaikanal4}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KodaikanalCity;