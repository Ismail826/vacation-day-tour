import React, { useContext } from 'react';
// import useServices from '../../../hooks/useServices';
import Package from '../Package/Package';
import "./Packages.css"
import { packageDetailsContext } from "../../../App"

const Packages = () => {
    const [packages, setPackages] = useContext(packageDetailsContext);
    return (
        <div>
            <h1 className='services-title'>Our Tour Packages</h1>

            <div className='services-container'>
                {
                    packages.map(details => <Package key={details.id} package={details}></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;