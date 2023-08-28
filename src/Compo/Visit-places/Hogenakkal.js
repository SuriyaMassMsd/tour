import React from "react";
import Hogenakkal1 from "../../assets/Home/hogenakkal1.jpeg";
import Hogenakkal2 from "../../assets//Home/hogenakkal2..jpeg";
import Hogenakkal3 from "../../assets/Home/hogenakkal3.jpeg";
import Hogenakkal4 from "../../assets/Home/hokenakkal4..jpeg";

function HogenakkalCity() {
  return (
    <div className=" mt-5 ">
      <div className="text-center">
        <h3>Hogenakkal</h3>
        <h3>Tourist Places Visit</h3>
      </div>
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center "
      >
        <div className="me-3">
          <img
            style={{ width: "200px", height: "242px" }}
            src={Hogenakkal1}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Theerthamalai Temple, Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            Theerthamalai is a popular pilgrim centre close to Hogenakkal. One
            of its most popular destinations is the Theerthamalai temple. Lord
            Theerthagireeswar, a form of Lord Shiva is the worshipping deity.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            It is believed that Lord Ram worshipped Lord Shiva at this temple to
            absolve him of the sin of killing so many demons, after his victory
            over Rvana. Therefore, it is believed that a dip in these holy
            waters can help man rid himself of sins committed against others.
            Theerthamalai Temple or Theerthagiriswarar Temple is located in
            small village Theerthamalai, just 16 km from Harur in Dharmapuri
            district of Tamil Nadu. The name Theerthamalai in Tamil means hill
            with sacred water. The temple is situated about one km up the steep
            slope of the hillock, derives its name from the five springs in the
            temple. This temple was built during 7th Century when the Cholas and
            the Pandya's were ruling this dynasty.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Hogenakkal Falls, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              {" "}
              Hogenakkal Falls is a scintillating waterfall that is located on
              river Kaveri in the Dharmapuri district of Tamil Nadu. The place
              gets its name from Hogenakkal, which means 'smoking rocks', owing
              to the unique rock arrangement that exists around it. The gushing
              beauty of this cascade is one of a kind and is often quoted as
              being the "Niagara falls of India".
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              The Kaveri River forks into multiple streams and falls through
              multiple steps, making the sight a mesmerising thing to behold.
              The carbonatite rocks by these falls are the oldest of its kind in
              South Asia and one of the oldest in the world. Drinking water can
              also be obtained from the falls, and interestingly enough, the
              water here is believed to possess medicinal properties, owing to
              the numerous herbs that grow in its path. Known for its pristine
              appeal,
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "220px" }}
              src={Hogenakkal2}
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
            src={Hogenakkal3}
            alt=""
          ></img>
        </div>

        <div style={{ width: "998px", marginTop: "10px" }}>
          <h6 className=" fw-bolder">Pennagram Village,Overview</h6>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            The village is located about 20 km away from Hogenakkal and is
            famous for its weekly fair that it holds every month to attract
            tourists. The village is also know for its brightly colored giant
            terracotta statues, which are known as Aiyanars.
          </p>
          <p style={{ textIndent: "5rem", textAlign: "justify" }}>
            According to census 2011 information the sub-district code of
            Pennagaram Block (CD) is 05889. Total area of pennagaram taluka is
            1,130 km² including 1,117.33 km² rural area and 13.04 km² urban
            area. Pennagaram taluka has a population of 2,34,853 peoples, out of
            which urban population is 29,654 while rural population is 2,05,199.
            Pennagaram taluka has a population density of 208 inhabitants per
            square kilometre. There are about 57,398 houses in the sub-district,
            including 7,266 urban houses and 50,132 rural houses.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div
          style={{ marginTop: "80px" }}
          className="d-flex justify-content-center "
        >
          <div style={{ width: "998px", marginTop: "10px" }} className="me-3">
            <h6 className="fw-bolder">Mettur Dam, Overview</h6>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Mettur Dam, situated 30 miles from Salem in a small Mettur
              Village, is one of the largest dams in India. Built across the
              River Cauvery at the canyon, Mettur Dam was built in the year 1943
              and is a sight of sheer beauty. The dam is surrounded by verdant
              hills and picturesque natural beauty and is quite popular among
              tourists. One of the most extraordinary features of the dam is its
              design, which is a testament to the country's engineering genius.
              Mettur Dam is a huge human-made marvel which spans over a massive
              length of 1700 metres and is a major hotspot where tourists visit
              from all across the country to relax and seek solitude.
            </p>
            <p style={{ textIndent: "5rem", textAlign: "justify" }}>
              Apart from being a tourist hotspot, the dam also provides
              irrigation facility for 2,71,000 acres of agricultural land around
              it. Another major attraction of the area is a water reservoir
              flanked by hilly ranges all around.
            </p>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "242px" }}
              src={Hogenakkal4}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HogenakkalCity;