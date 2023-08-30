import React from 'react'
import './Time.css';
import times from './new';


function Time() {
    return (
        <div className='container' >

          
            <div className="text-center my-5">
                <h3 className='text-uppercase'>tamilnadu tourism</h3>
                <h6 className='text-capitalize fw-bold'>best time to visit</h6>
            </div>
            <div className='content'>
                {times.map((time,i) => (

                    time.id % 2 === 1 ?(


                        <div className='contanier odd mb-4' key={i} id={time.title}>

                            <h3 className='my-4 text-center text-lg-start'>{time.heading}</h3>

                            <div className="row mb-5">


                                <div className="col-sm-12  col-lg-6">
                                    <h4 className='text-center mb-4 text-sm-start'>{time.visitparahead}</h4>
                                    <p className="tindent my-3">
                                        {time.visitpara1}
                                    </p>
                                    <p className="tindent">
                                        {time.visitpara2}
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="" >

                                        <div className="card w-100 h-100 cardz" >
                                            <div className="card-header bg-white d-flex justify-content-between align-items-center my-3">
                                                <h4 className='text-capitalize text-center fs-sm-4 fw-bold me-4'>
                                                    more about best time to travel {time.title}
                                                </h4>
                                                <button className='btn btn-close me-auto'></button>

                                            </div>
                                            <div className="card-body d-flex justify-content-center w-100 h-100 my-5">
                                                <div className="row">

                                                    <div className="col-4">
                                                        <img id='box-card-img' src={require(`../../assets/Gallery/${time.img1}`)} className=' ' alt={time.img1name} />
                                                        <p className='text-center'>{time.img1name}</p>
                                                    </div>

                                                    <div className="col-4">
                                                        <img  id='box-card-imgg' src={require(`../../assets/Gallery/${time.img2}`)} className='img-fluid ' alt={time.img2name} />
                                                        <p className='text-center'>{time.img2name}</p>

                                                    </div>
                                                    <div className="col-4">
                                                        <img  id='box-card-imggg' src={require(`../../assets/Gallery/${time.img3}`)} className='img-fluid ' alt={time.img3name} />
                                                        <p className='text-center'>{time.img3name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer h-100 bg-white d-flex justify-content-end my-2">
                                                <button className="btn btn-secondary m-1" type="button" data-bs-toggle="offcanvas" data-bs-target={`#offcanvasLeft${time.title}`} aria-controls="offcanvasExample">
                                                    close
                                                </button>
                                                <button className="btn btn-primary m-1" type="button" data-bs-toggle="offcanvas" data-bs-target={`#offcanvasLeft${time.title}`} aria-controls="offcanvasExample">
                                                    save changes
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="modalz">
                                        <div className="offcanvas offcanvas-start" tabIndex="-1" id={`offcanvasLeft${time.title}`} aria-labelledby={`offcanvasLeftLabel${time.title}`}>
                                            <div className="offcanvas-header">
                                                <h4 className="offcanvas-title text-center mx-auto" id="offcanvasExampleLabel">Best time to Visit in {time.sidemain}</h4>
                                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                <h6 className='my-3  fw-bold text-center'>{time.sidehead1}</h6>
                                                <p className="tindent my-3">{time.sidepara1}</p>
                                                <h6 className='my-3 fw-bold text-center'>{time.sidehead2}</h6>
                                                <p className="tindent my-3">{time.sidepara2}</p>
                                                <h6 className='my-3 fw-bold text-center'>{time.sidehead3}</h6>
                                                <p className="tindent my-3">{time.sidepara3}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    ) : (
                        <div className='container even' key={time.i} id={time.title} >
                            <div className="modalz">
                                        <div className="offcanvas offcanvas-end" tabIndex="-1" id={`offcanvasRight${time.title}`} aria-labelledby="offcanvasRightLabel">
                                            <div className="offcanvas-header">
                                                <h4 id="offcanvasRightLabel" className='text-center mx-auto'>Best Time to visit in {time.sidemain}</h4>
                                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                <h6 className='my-3  fw-bold text-center'>{time.sidehead1}</h6>
                                                <p className="tindent  my-3">{time.sidepara1}</p>
                                                <h6 className='my-3 fw-bold text-center'>{time.sidehead2}</h6>
                                                <p className="tindent  my-3">{time.sidepara2}</p>
                                                <h6 className='my-3 fw-bold text-center'>{time.sidehead3}</h6>
                                                <p className="tindent my-3">{time.sidepara3}</p>
                                            </div>
                                        </div>
                                    </div>

                            <h3 className='text-center mt-5 text-lg-start'>{time.heading}</h3>

                            <div className="row mb-5 " >

                                <div className="col-lg-6 col-sm-12 h-100 mb-5 ">
                                    <div className="" >

                                        <div className="card w-100 cardz" >
                                            <div className="card-header bg-white d-flex justify-content-between align-items-center my-3">
                                                <h4 className='text-capitalize text-center fs-sm-4 fw-bold me-4'>
                                                    more about best time to travel {time.title}
                                                </h4>
                                                <button className='btn btn-close me-auto'></button>

                                            </div>
                                            <div className="card-body d-flex justify-content-evenly align-items-center my-5 p-4">
                                                <div className="row">

                                                    <div className="col-4">
                                                        <img id='box-card-img' src={require(`../../assets/Gallery/${time.img1}`)} className='img-fluid ' alt={time.img1name} />
                                                        <p className='text-center'>{time.img1name}</p>
                                                    </div>

                                                    <div className="col-4">
                                                        <img id='box-card-imgg' src={require(`../../assets/Gallery/${time.img2}`)} className='img-fluid ' alt={time.img2name} />
                                                        <p className='text-center'>{time.img2name}</p>

                                                    </div>
                                                    <div className="col-4">
                                                        <img id='box-card-imggg' src={require(`../../assets/Gallery/${time.img3}`)} className='img-fluid ' alt={time.img3name} />
                                                        <p className='text-center'>{time.img3name}</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="card-footer bg-white d-flex justify-content-end my-2">
                                                <button className="btn btn-secondary m-1" type="button" data-bs-toggle="offcanvas" data-bs-target={`#offcanvasRight${time.title}`} aria-controls="offcanvasRight">Close</button>
                                                <button className="btn btn-primary m-1" type="button" data-bs-toggle="offcanvas" data-bs-target={`#offcanvasRight${time.title}`} aria-controls={`offcanvasRight${time.title}`}>Save changes</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=" col-lg-6">
                                    <h4 className='text-center mb-4 text-sm-start'>{time.visitparahead}</h4>
                                    <p className="tindent my-3">
                                        {time.visitpara1}
                                    </p>
                                    <p className="tindent">
                                        {time.visitpara2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )))}
            </div>

        </div>
    )
}

export default Time;