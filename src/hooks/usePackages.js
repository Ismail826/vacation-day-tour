import { useEffect, useState } from "react";

const usePackages = () => {

const [packages,setPackages]=useState([]);

useEffect( ()=>{
    fetch('packages.json')
    .then(res=>res.json())
    .then(data=>setPackages(data));
},[]);

return [packages,setPackages];

};

export default usePackages;