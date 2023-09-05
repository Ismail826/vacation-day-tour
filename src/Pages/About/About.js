import React from 'react';

const About = () => {
    return (
        <>
            <div className="card mb-3 w-50 mx-auto d-block mt-5" style={{ maxwidth: "540px" }}>
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="https://i.ibb.co/nBG4dHP/ismail.jpg" class="card-img" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title"><span style={{color:"red"}}>ISMAIL</span> HOSSAIN MUZUMDER</h5>
                            <p class="card-text">I WANT TO BE A MERN DEVELOPER IN NEXT 6 MONTHS</p>
                            <p class="card-text"><small class="text-muted">School: Feni Central High School</small></p>
                            <p class="card-text"><small class="text-muted">College: Dr.Mahbubur Rahman Mollah College</small></p>
                            <p class="card-text"><small class="text-muted">University: American International University Bangladesh</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;