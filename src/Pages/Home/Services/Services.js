import React, { useEffect, useState } from 'react';
// import Service from '../Home/Service/Service';
import './Services.css';
import Service from '../Service/Service';
const Services = () => {

    const [services,setServices]=useState([]);

    useEffect( ()=>{
        fetch('Services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div id="services">
            <h1 className='services-title'>Services</h1>

            <div className='services-container'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
           </div>
        </div>
    );
};

export default Services;